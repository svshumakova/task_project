const mainUrl = 'http://tasks.smartjs.academy';
export function register(registerData) {
    return fetch(`${mainUrl}/users`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(registerData)
    })
}

export function validate(emailObj) {
    return fetch(`${mainUrl}/validate/email`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(emailObj)
    })
}


export function login() {

}


export function activate() {

}

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLm1lIiwiaWF0IjoxNDY2MjQ5OTg0fQ.juHnPtwlXVdOeOXUFngAB3Q0SdBmJiCeLcN-CnAZQB4';
const countOfUsers = 20;
export function loadUsers() {
    return fetch(`${mainUrl}/users?skip=countOfUsers`, {
        method: 'get',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}