import { Collection } from 'backbone';
import { User } from '../models/User';
import { loadUsers } from '../api';

var UserCollection = Collection.extend({
    model: User,

    fetch: function(collection) {
        loadUsers().then(result => result.json()).then((result) => {
            this.set(result);
        })
    }
});

export default UserCollection;