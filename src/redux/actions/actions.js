// url imports
import { URL_USERS } from "../../api/baseUrl/BaseUrl"

//  async calls

export const SignUp = (credentials) => {
    return(dispatch) => {
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
            dispatch({
                type: "REGISTER_USER",
                payload: credentials
            })
        }).catch((err) => {
            console.log(err)
            dispatch({
                type: "REGISTER_USER_ERROR",
                payload: err
            })
        })
    }
}

export const Login = (credentials) => {
    return(dispatch) => {
        fetch(URL_USERS).then((res) => {
            let users = res.json()
            return users
        }).then((users) => {
            const user = users.filter(user => user.username === credentials.username && user.email === credentials.email && user.password === credentials.password)
            // console.log(user, user.length)
            if(user.length === 0){throw new Error('user not found')}
            return user
        }).then((user) => {
            dispatch({
                type: "LOGIN_USER",
                payload: user
            })
        }).catch((err) => {
            console.log(err)
            dispatch({
                type: "USER_LOGIN_ERROR",
                payload: err
            })
        })  
    }
} 