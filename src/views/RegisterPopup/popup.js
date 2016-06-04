import { View } from 'backbone';
import {validateEmail, validatePassword, validationErrors} from '../../helpers/form';
//import _style from '../../helpers/localStyles'
import forEach from 'lodash/forEach';
import find from 'lodash/find';
import every from 'lodash/every';
import $ from 'jquery';
import PopupHTML from "./popup.html";
window.$ = $;
const popupTemplate = PopupHTML;

const RegisterPopupView = View.extend({
    tagName: "div",
    template: popupTemplate,
    initialize: function () {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        this.render();
        this.timeoutId = null;
        this.errors = {};
    },
    /*validate: function (formData) {

    },*/
    events: {
        "submit .js-register-form": "register",
        "input input.form-control": "onChange"
    },
    setErrors: function() {
        const form = this.$el.find('form');
        const errors = form.find('[data-error]');
        forEach(this.errors, (errorText, errorName) => {
            console.log(form.find('[data-error]'), errorName);
            const errorEl = errors.filter(function(index){
                return $(this).attr('data-error') === errorName;
            });
            console.log(errorEl, errorName, errorText);
            errorEl.text(errorText);
        });
    },
    onChange: function (e) {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId)
        }
        const self = this;
        this.timeoutId = setTimeout(function () {
            const form = self.$el.find('form');
            const formData = form.serializeArray()
            const currentField = $(e.target);
            const val = currentField.val();
            const fieldName = currentField.attr('name');

            switch(fieldName) {
                case 'email':
                    self.errors[fieldName] = validateEmail(val) ? '' : validationErrors.email;
                    break;
                case 'password1':
                case 'password2':
                    self.errors[fieldName] = validatePassword(val) ? '' : validationErrors.password;
                    const pass1 = find(formData, {name: 'password1'}).value;
                    const pass2 = find(formData, {name: 'password2'}).value;
                    self.errors.general = pass1 && pass2 && pass1 !== pass2 ? validationErrors.passwordsMatch : '';
                    break;
            }

            self.setErrors();
            self.canBeSubmitted();
        }, 1000);
    },
    canBeSubmitted: function() {
        const form = this.$el.find('form');
        const formData = form.serializeArray()
        const btnSubmit = form.find('.js-btn-save');
        const areFielsdValid =  every(this.errors, (errorText) => {
            return !!errorText;
        });
        const areFieldsFilled = every(formData, (item) => {
            return item.value;
        });
        
        console.log(areFielsdValid, areFieldsFilled);
            
        if (areFielsdValid && areFieldsFilled) {
            btnSubmit.removeAttr('disabled');
        } else {
            btnSubmit.attr('disabled');
        }
    },
    register: function (e) {
        e.preventDefault();
        const form = $(e.target);
        //const formData = $(e.target).serializeArray();
        //this.validate(formData);

    },
    render: function () {
        this.$el.html(this.template);
        return this.$el;
    },
});

export default RegisterPopupView;
