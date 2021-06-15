// url imports
import { URL_USERS } from "./baseUrl/BaseUrl"

//  async calls

export const SignUp = (credentials) => {
    let errorSignUp

    console.log(credentials)
    fetch(URL_USERS,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            username: credentials.username,
            password: credentials.password
        })
    }).then(() => {
        console.log('success')
    }).catch((err) => {
        errorSignUp = err
        console.log(err)
    })

    return errorSignUp
}

export const Login = async (credentials) => {
    let errorLogin;

    fetch(URL_USERS).then((res) => {
        let users = res.json()
        return users
    }).then((users) => {
        const user = users.filter(user => user.username === credentials.username && user.email === credentials.email && user.password === credentials.password)
        // console.log(user, user.length)
        if(user.length === 0){throw new Error('user not found')}
        return user
    }).then((user) => {
        console.log(user)
    }).catch((err) => {
        console.log(err)
        errorLogin = err
    })  

    return errorLogin
} 