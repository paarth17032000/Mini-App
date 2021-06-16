// initstate
const initState = {
    user: {},
    posts: [],
    usersToFollow: [],
    loginError: null,
    registerError: null
}

// reducer
const rootReducer = (state = initState, action) => {
    switch(action.type){
        // register a user
        case "REGISTER_USER" : 
            // console.log('succes register', action.payload)
            return {
                ...state,
                user: action.payload,
                registerError: null
            }
        // error while registering
        case "REGISTER_USER_ERROR" :
            // console.log('register error')
            return{
                ...state,
                registerError: action.payload
            }

        // loging a user inside app
        case "LOGIN_USER" : 
            // console.log('login succes')
            return{
                ...state,
                user: action.payload,
                loginError: null
            }

        // login error
        case "USER_LOGIN_ERROR" : 
            // console.log('login error')
            return{
                ...state,
                loginError: action.payload
            }
        
        // following a new user
        case "ADD_NEW_FOLLOWED_USERS":
            // console.log(action.payload, 'success follow')
            return{
                ...state,
                usersToFollow: [
                    ...state.usersToFollow,
                    action.payload
                ]
            }
        
        default :
            return state
    }
}

export default rootReducer