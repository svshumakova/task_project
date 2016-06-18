import { View } from 'backbone';
import _style from '../../helpers/localStyles'
import template from 'lodash/template';
import $ from 'jquery';
/*import UserStyles from "./UserCard.css";*/
/*import UserCardHTML from "./UserCard.html";*/
window.$ = $;

/*const userCartTemplate = UserCardHTML;*/

const UserListView = View.extend({
    initialize: function(options){
        //this.collection
        this.collection = options.collection;
        console.log('collection', this.collection);
    },
    render: function() {
        /*this.collection.each(function(user){
            var userView = new UserView({ model: User });
            //console.log(personView.el);
        });*/
    }
    /*tagName: "div",
    template: template(userCartTemplate),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        _style(this.$el[0], UserStyles);
        return this.$el;
    },*/
});

export default UserListView;
