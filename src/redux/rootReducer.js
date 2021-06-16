// initstate
const initState = {
    user: {},
    posts: [],
    usersToFollow: [],
    loginError: null,
    registerError: null,
    newPostError: null
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

        // case "ADD_NEW_POSTS":
        //     console.log(action.payload)
        //     return{
        //         ...state,
        //         posts: [
        //             ...state.posts,
        //             action.payload
        //         ],
        //         newPostError: null
        //     }

        // case "ADD_NEW_POSTS_ERROR":
        //     console.log(action.payload)
        //     return{
        //         ...state,
        //         newPostError: action.payload,
        //     }

        case "ADD_NEW_FOLLOWED_USERS":
            console.log(action.payload, 'success follow')
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