export const validationErrors = {
    email : 'Email is not valid',
    password: 'Password should contain at least 1 number and has length 6 characters',
    passwordsMatch: 'Passwords do not match'
}
export function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
export function validatePassword(password, minlength=6) {
    if(password.length < minlength) {
        return false;
    }
    const re = /^(?=.*\d).+$/;
    return re.test(password);
}

