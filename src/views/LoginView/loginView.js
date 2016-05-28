import { View } from 'backbone';
import $ from 'jquery';
window.$ = $;
import loginViewHTML from "./loginView.html";
import { openRegistrationPopup } from "../../helpers/popupManager";

const LoginView = View.extend({
    tagName: "div",
    template: loginViewHTML,
    initialize: function () {
        /*this.render();
        this.timeoutId = null;
        this.errors = [];*/

    },
    events: {
        "click .js-open-login-popup": "login",
        "click .js-open-register-popup": "register"
    },
    login: function() {
        openRegistrationPopup($('body')).then((res) => {
            console.log(res)
        }, () => {});
    },
    register: function() {
        openRegistrationPopup($('body'));
    },
    render: function () {
        this.$el.html(this.template);
        //this.template(this.errors);
        return this.$el;
    },
});

export default LoginView;
