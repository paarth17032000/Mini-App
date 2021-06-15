// url imports
import { URL_USERS } from "./baseUrl/BaseUrl"

//  async calls

export const SignUp = (credentials) => {
    console.log(credentials)
    fetch(URL_USERS,{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            username: credentials.username
        })
    }).then(() => {
        console.log('success')
    }).catch((err) => {
        console.log(err)
    })
}

export const Login = async (credentials) => {
    console.log(credentials)
    const res = await fetch(`${URL_USERS}?username=${credentials.email}`)
    console.log(res)


    // .then((res) => {
    //     // const data = res.json()
    //     console.log(res)
    // }).catch((err) => {
    //     console.log(err)
    // })
} 