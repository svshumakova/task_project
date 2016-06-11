import { View } from 'backbone';
import $ from 'jquery';
window.$ = $;
import loginViewHTML from "./loginView.html";
import { openRegistrationPopup, openLoginPopup } from "../../helpers/popupManager";

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
        openRegistrationPopup($('body')).then((res) => {
            /* Tmp to ssee data from register request
            {user: Object, token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6I1…0NDB9.HLgfrIsMBHfHIFYdaSun1NX2a1_CgkMMX9guhDb7vx4"}*/
            console.log('in view',res);
            if(res.token) {
                openLoginPopup();
            }
        });
    },
    render: function () {
        this.$el.html(this.template);
        return this.$el;
    },
});

export default LoginView;
