// import { URL_POSTS } from "../../api/baseUrl/BaseUrl";

// export const FollowUser = (username) => {
//     console.log(username)
//     return(dispatch) => {
//         // fetch user posts
//         fetch(URL_POSTS).then((res)  => {
//             return res.json()
//         }).then((users) => {
//             let newPosts = users.filter(user => user.username === username)
//             console.log(newPosts.length)
//             if(newPosts.length !== 0){
//                 return newPosts
//             }  
//         }).then((newPosts) => {
//             console.log('close to dispatch')
//             dispatch({
//                 type: "ADD_NEW_POSTS",
//                 payload: newPosts
//             })
//         }).catch((err) => {
//             dispatch({
//                 type: "ADD_NEW_POSTS_ERROR",
//                 payload: err.message
//             })
//         })

//         // dispatch action to add to current posts
//     }
// }

export const FollowUser = (username) => {
    return(
        {
            type: "ADD_NEW_FOLLOWED_USERS",
            payload: username
        }
    )
}