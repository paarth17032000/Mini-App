import { Box, Button, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexDirection: 'column',
        alignItems: "center",
        minHeight: '100vh',
        backgroundColor: theme.palette.secondary.main,
    },
    btn: {
        color: 'white',
        border: '1px solid white',
        margin: theme.spacing(4),
        padding: theme.spacing(1,4),
        letterSpacing: 1,
        '&:hover':{
            backgroundColor: 'white',
            color: theme.palette.secondary.main,
            transition: 'all .4s ease-in-out'
        }
    }, 
    title: {
        color: 'white',
    }
})

class LandingPage extends Component {
    componentDidMount(){
        localStorage.setItem('user', null)
    }
    render(){
        const {classes} = this.props
        return (        
            <div className={classes.root}>
                <Box className={classes.title}>
                    <Typography variant="h2">
                        Social
                    </Typography>
                </Box>
                <Box>
                    <Button
                    variant="outlined"
                    component={Link}
                    to='/login'
                    className={classes.btn}
                    >
                        Login
                    </Button>
                    <Button
                    variant="outlined"
                    component={Link}
                    to='/signup'
                    className={classes.btn}
                    >
                        SignUp
                    </Button>
                </Box>
            </div>
        )
    }
}

export default withStyles(styles, {withTheme: true})(LandingPage)