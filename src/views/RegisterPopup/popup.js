import { View } from 'backbone';
import {validateEmail, validatePassword} from '../../helpers/form';
//import _style from '../../helpers/localStyles'
//import indexOf from 'lodash';
import $ from 'jquery';
import PopupHTML from "./popup.html";
window.$ = $;
console.log(validateEmail, validatePassword);
const popupTemplate = PopupHTML;

const RegisterPopupView = View.extend({
    tagName: "div",
    template: popupTemplate,
    initialize: function () {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        // console.log("resole, reject",this.resolve, this.reject);
        this.render();
        this.timeoutId = null;
        this.errors = [];
    },
    validate: function () {

    },
    events: {
        "submit .js-register-form": "register",
        "input input.form-control": "onChange"
    },
    onChange: function (e) {
        this.resolve('user');
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
        const self = this;
        this.timeoutId = setTimeout(function () {
            const form = self.$el.find('form');
            let formFields = form.serializeArray();
            const fromObj = {};
            formFields.forEach((item) => {
                fromObj[item.name] = item.value;
            });

            this.errors.email = !validateEmail(formFields.email) ? 'Email is not valid' : '';
            this.errors.password1 = !validateEmail(formFields.password1) ? 'Password should contain at least 1 number and has length 6 characters' : '';
            this.errors.password2 = !validateEmail(formFields.password2) ? 'Password should contain at least 1 number and has length 6 characters' : '';

            const pass1 = formFields.password1.value;
            const pass2 = formFields.password2.value;
            this.errors.general = (pass1 && pass2 && (pass1 !== pass2)) ? 'Passwords don\'t match' : '';

        }, 1000);
    },
    register: function (e) {
        e.preventDefault();
        console.log($(e.target).serializeArray());

    },
    render: function () {
        this.$el.html(this.template);
        //this.template(this.errors);
        return this.$el;
    },
});

export default RegisterPopupView;
