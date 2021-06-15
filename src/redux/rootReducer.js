// initstate
const initState = {
    user: {},
    loginError: null,
    registerError: null
}

// reducer
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case "REGISTER_USER" : 
            console.log('succes register', action.payload)
            return {
                ...state,
                user: action.payload,
                registerError: null
            }
        
        case "REGISTER_USER_ERROR" :
            console.log('register error')
            return{
                ...state,
                registerError: action.payload
            }

        case "LOGIN_USER" : 
            console.log('login succes')
            return{
                ...state,
                user: action.payload,
                loginError: null
            }

        case "USER_LOGIN_ERROR" : 
            console.log('login error')
            return{
                ...state,
                loginError: action.payload
            }
        
        default :
            return state
    }
}

export default rootReducer