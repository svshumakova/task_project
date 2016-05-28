import { Router, history } from 'backbone';
//import User from './models/User';
//import { RegisterPopupView } from './views';
import { LoginView } from './views';
console.log('index.js');
const AppRouter = Router.extend({
    routes: {
        "login": "showLoginPage",
    },

    showLoginPage: function() {
        const $el = $('#page');
        const view = new LoginView();
        console.log('view', view);
        $el.append(view.render());
    }
});
/*const showRegisterPopup = () => {
    const $el = $('body');
    const popup = new RegisterPopupView().$el;
   // console.log(view);
    $el.append(popup);

}
const registerBtn = document.querySelector('.js-show-register-popup');
console.log(registerBtn);
registerBtn.addEventListener('click', () => {
    console.log(11);
    showRegisterPopup();
})*/

const app = new AppRouter();
window.addEventListener('load', () => history.start());
