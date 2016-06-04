import { Router, history } from 'backbone';
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

const app = new AppRouter();
window.addEventListener('load', () => history.start());
