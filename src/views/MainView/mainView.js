import { View } from 'backbone';
import _style from '../../helpers/localStyles'
import $ from 'jquery';
window.$ = $;
import mainViewStyles from "./mainView.css";
import mainViewHTML from "./mainView.html";
import { openRegistrationPopup, openLoginPopup } from "../../helpers/popupManager";

const MainView = View.extend({
    tagName: "div",
    template: mainViewHTML,
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
            if(res.token) {
                openOkRegistrationPopup();
            }
        });
    },
    render: function () {
        this.$el.html(this.template);
        _style(this.$el[0], mainViewStyles);
        return this.$el;
    },
});

export default MainView;
