import { Collection } from 'backbone';
import { User } from '../models/User';

var UserCollection = Collection.extend({
    model: User,
    url: function () { return `http://jsonplaceholder.typicode.com/todos`}
});

console.log(UserCollection);