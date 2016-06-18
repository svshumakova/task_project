import { Router, history } from 'backbone';
import { MainView } from './views';
import { UserListView } from './views';
import UsersCollection from './collections/UsersCollection';
console.log(UsersCollection);
const AppRouter = Router.extend({
    routes: {
        "main": "showMainPage",
        "users": "showUsersPage",
    },

    showMainPage: function() {
        const $el = $('#page');
        const view = new MainView();
        console.log('view', view);
        $el.append(view.render());
    },

    showUsersPage: function() {
        const $el = $('#page');
        const userCollection = new UsersCollection();
        userCollection.fetch(userCollection);

        console.log(userCollection);
        const view = new UserListView({collection: userCollection});
        console.log('view', view);
        $el.append(view.render());
    }
});

const app = new AppRouter();
window.addEventListener('load', () => history.start());
