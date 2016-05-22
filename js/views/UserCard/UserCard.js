import { View } from 'backbone';
import _style from '../../helpers/localStyles'
import template from 'lodash/template';
import $ from 'jquery';
import UserStyles from "./UserCard.css";
import UserCardHTML from "./UserCard.html";
window.$ = $;

const userCartTemplate = UserCardHTML;

const BackboneView = View.extend({
    tagName: "div",
    template: template(userCartTemplate),

    render: function () {
        this.$el.html(this.template(this.model.attributes));
        _style(this.$el[0], UserStyles);
        return this.$el;
    },
});

export default BackboneView;
