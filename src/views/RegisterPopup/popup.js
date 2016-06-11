import { View } from 'backbone';
import PopupView from '../Popup/popup';
import {validateEmail, validatePassword, validationErrors} from '../../helpers/form';
import forEach from 'lodash/forEach';
import find from 'lodash/find';
import every from 'lodash/every';
import $ from 'jquery';
import PopupHTML from "./popup.html";
window.$ = $;
const popupTemplate = PopupHTML;
import { register, validate } from '../../api';

const RegisterPopupView = PopupView.extend({
    initialize: function () {
        PopupView.prototype.initialize.call(this);
        this.render();
        this.timeoutId = null;
        this.errors = {};
    },
    tagName: "div",
    template: popupTemplate,
    events: {
        "submit .js-register-form": "validate",
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
            return !errorText;
        });
        const areFieldsFilled = every(formData, (item) => {
            return item.value;
        });
            
        if (areFielsdValid && areFieldsFilled) {
            btnSubmit.removeAttr('disabled');
        } else {
            btnSubmit.attr('disabled');
        }
    },
    validate: function(e) {
        e.preventDefault();
        const form = $(e.target);
        let formData = form.serializeArray();
        formData = formData.reduce((prev, next) => {
            return prev = {
                ...prev,
                [next.name]: next.value
            }
        }, {});
        validate({email: formData.email}).then(r =>  r.json()).then((res) => {
            if (res.errors) {
                this.errors.general = res.errors.email === 'ALREADY_REGISTERED'
                ? 'This email has been already registred' : res.errors.email;
                this.setErrors();
            }
            if (res.success) {
               register({
                   email: formData.email,
                   password: formData.password1
               }).then(res => res.json()).then((res) => {
                   console.log('res', res);
                   this.resolve(res);
                   this.closePopup();
               },
               (err) => {
                   console.log('err', err);
               });
            }
        },
        (err) => {
            console.log('err', err);
        })
    },
    render: function () {
        this.$el.html(this.template);
        return this.$el;
    },
});

export default RegisterPopupView;
