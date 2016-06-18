import { View } from 'backbone';
import $ from 'jquery';
import UserHTML from "./user.html";
window.$ = $;
import userStyles from "./userStyles.css";
const userTemplate = UserHTML;

const UserView = PopupView.extend({
    initialize: function () {
    },
    tagName: "div",
    template: userTemplate,
    render: function () {
        this.$el.html(this.template(this.model.attributes));
        _style(this.$el[0], userStyles);
        return this.$el;
    },
});

export default UserView;
