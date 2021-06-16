import { Box, Button, Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles( theme => ({
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
}))

export default function LandingPage() {
    const classes = useStyles()
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
