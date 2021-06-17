import React, { Component } from 'react'
import { Typography, Button, Box, Card, CardContent } from '@material-ui/core'
import { connect } from 'react-redux'
import { FollowUser } from '../../redux/actions/postsActions'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'

const styles = (theme) => ({
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

class SingleUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            status: 'Follow',
        }
    }

    handleClick = (username) => {
        this.props.FollowUser(username)
        // console.log(username)
        this.setState({
            status: 'Unfollow'
        })
        this.props.history.push('/dashboard')
    }


    render(){
        const {user, classes} = this.props
        return (
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
                        disabled={this.props.usersFollowed.includes(this.props.user.username)}
                        onClick={() => this.handleClick(user.username)}
                        variant="contained" 
                        color="secondary">
                           {this.state.status}
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return{
        usersFollowed: state.usersToFollow
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        FollowUser: (username) => dispatch(FollowUser(username))  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles, {withTheme: true})(SingleUser)))