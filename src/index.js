import { Router, history } from 'backbone';
import User from './models/User';
import { UserCard } from './views';
import $ from 'jquery';
window.$ = $;

function showUser(id) {
    if(id) {
        const $el = $('#content');
        const currentUser = new User({id});
        const view = new Usercard({model:currentUser});
        currentUser.fetch();
        view.render();
        currentUser.on('change', () => view.render());
        $el.append(view.render());
    }
}
const AppRouter = Router.extend({
    routes: {
        'user/:id': 'showUser',
        'album/:id': 'showAlbum',
        'photo/:id': 'showPhoto',
        'userlist': 'showUserList',
    },
    showUser
});

const app = new AppRouter();
window.addEventListener('load', () => history.start());