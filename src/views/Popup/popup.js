import { View } from 'backbone';
import $ from 'jquery';
window.$ = $;

const PopupView = View.extend({
    initialize: function () {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    },
    render: function () {
        this.$el.html(this.template);
        return this.$el;
    },
});

export default PopupView;
