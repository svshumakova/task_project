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

export function loadUsers() {

}