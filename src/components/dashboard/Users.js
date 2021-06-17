import { Typography } from '@material-ui/core'
// import { withStyles } from '@material-ui/styles'
import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { URL_USERS } from '../../api/baseUrl/BaseUrl'
// import { FollowUser } from '../../redux/actions/postsActions'
import SingleUser from './SingleUser'

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: null,
        }
    }
    componentDidMount(){
        let username = JSON.parse(localStorage.getItem('user')).username
        fetch(URL_USERS).then((res) => {
            return res.json()
        }).then((users) => {
            return users.filter(user => user.username !== username)
        }).then((filteredUsers) => {
            this.setState({users: filteredUsers})
        }).catch((err) => {
            console.log(err.message)
        })   
    }

    render() {
        // const {FollowUser} = this.props
        return (
            <>
                { this.state.users ? (
                    <div>
                        { this.state.users.map(user => {
                            return(
                                <SingleUser user={user} key={user.id}/>
                            )
                        })}
                    </div>
                    ) : (
                    <Typography variant="h4" color="secondary">
                        No users....
                    </Typography>
                )}
            </>
        )
    }
}

export default Users

// const mapDispatchToProps = (dispatch) => {
//     return{
//         FollowUser: (username) => dispatch(FollowUser(username))  
//     }
// }

// export default connect(null, mapDispatchToProps)(withStyles(styles, {withTheme:true})(Users))
