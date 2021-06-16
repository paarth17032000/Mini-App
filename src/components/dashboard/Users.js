import { Typography, Button, Box, Card, CardContent } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { URL_USERS } from '../../api/baseUrl/BaseUrl'
import { FollowUser } from '../../redux/actions/postsActions'

const styles = theme => ({
    back: {
        '& > *': {
                margin: theme.spacing(1),
        },
    },
    card: {
        margin: theme.spacing(2),
        width: 425
    },
    username: {
        flexGrow: 1
    }
})

class Users extends Component {
    constructor(props){
        super(props)
        this.state = {
            users: null
        }
    }
    async componentDidMount(){
        let res = await fetch(URL_USERS)
        let users = await res.json()
        this.setState({users})
    }
    render() {
        // console.log(this.props)
        const {classes, FollowUser} = this.props
        return (
            <>
                { this.state.users ? (
                    <div>
                        { this.state.users.map(user => {
                            return(
                                <Card key={user.id} className={classes.card}>
                                    <CardContent>
                                        <Box
                                        className={classes.back}
                                        display="flex"
                                        >
                                            <Typography  variant="h4" color="secondary" className={classes.username}>
                                                {user.username}
                                            </Typography>
                                            <Button 
                                            onClick={() => {
                                                FollowUser(user.username)
                                                this.props.history.push('/dashboard')
                                            }}
                                            variant="contained" 
                                            color="secondary">
                                                Follow
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
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

const mapDispatchToProps = (dispatch) => {
    return{
        FollowUser: (username) => dispatch(FollowUser(username))  
    }
}

export default connect(null, mapDispatchToProps)(withStyles(styles, {withTheme:true})(Users))
