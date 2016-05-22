import find from 'lodash/find';
import { Model } from 'backbone';

// import Backbone from 'backbone';
// const { Model } = Backbone; // const Model = Backbone.Model;

const User = Model.extend({
    url: function () { return `http://jsonplaceholder.typicode.com/users/2` },
});

export default User;
