import { Box, Button, makeStyles } from '@material-ui/core'
import React from 'react'
import {Link} from 'react-router-dom'

const useStyles = makeStyles( theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "column",
        minHeight: '100vh',
        // backgroundColor: theme.palette.secondary.main
    },
    btn: {
        margin: theme.spacing(4)
    }
}))

export default function LandingPage() {
    const classes = useStyles()
    return (        
        <Box className={classes.root}>
            <Button
            variant="contained"
            component={Link}
            to='/login'
            className={classes.btn}
            color="primary"
            >
                Login
            </Button>
            <Button
            variant="contained"
            component={Link}
            to='/signup'
            className={classes.btn}
            color="primary"
            >
                SignUp
            </Button>
        </Box>
    )
}
