// dispatches an action to add  a user in the usersToFollow object of the state
export const FollowUser = (username) => {
    return(
        {
            type: "ADD_NEW_FOLLOWED_USERS",
            payload: username
        }
    )
}