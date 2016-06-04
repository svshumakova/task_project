import { View } from 'backbone';
import $ from 'jquery';
window.$ = $;
import loginViewHTML from "./loginView.html";
import { openRegistrationPopup } from "../../helpers/popupManager";

const LoginView = View.extend({
    tagName: "div",
    template: loginViewHTML,
    events: {
        "click .js-open-login-popup": "login",
        "click .js-open-register-popup": "register"
    },
    login: function(e) {
        e.preventDefault();
        openRegistrationPopup($('body')).then((res) => {
            console.log(res)
        }, () => {});
    },
    register: function(e) {
        e.preventDefault();
        openRegistrationPopup($('body'));
    },
    render: function () {
        this.$el.html(this.template);
        return this.$el;
    },
});

export default LoginView;
