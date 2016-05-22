//import { Router, history } from 'backbone';
//import User from './models/User';
import { RegisterPopupView } from './views';

console.log('here');
/*const AppRouter = Router.extend({
    routes: {

    },

});*/
const showRegisterPopup = () => {
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
})
/*
const app = new AppRouter();
window.addEventListener('load', () => history.start());*/
