import React, {Component} from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import { Login } from '../../redux/actions/authActions'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/styles'


const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: '100vh',
        // backgroundColor: theme.palette.secondary.main
    },
    field: {
        margin: theme.spacing(2,0)
    }
})

class LoginPage extends Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            username: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.props)
        this.props.Login(this.state)
        // Login(this.state)
        this.setState({email: '', username: '', password: ''})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        // console.log(this.props)
        const {classes, loginError} = this.props
        // console.log('err: ',authError)
        return (
            <form 
            onSubmit={this.handleSubmit}
            className={classes.root}
            >
                <TextField 
                type="email"
                name="email"
                value={this.state.email}
                className={classes.field}
                label="Email"
                placeholder="Email.... "
                onChange={this.handleChange}
                />
                <TextField 
                type="text"
                name="username"
                value={this.state.username}
                className={classes.field}
                label="Username"
                placeholder="Username.... "
                onChange={this.handleChange}
                />
                <TextField 
                type="text"
                name="password"
                value={this.state.password}
                className={classes.field}
                label="Password"
                placeholder="Password.... "
                onChange={this.handleChange}
                />
                <Button 
                variant="contained"
                color="primary"
                value={this.state}
                className={classes.field}
                type="submit"
                >
                    Login
                </Button>
                { loginError ? (
                    <Typography variant="h4" color="error">
                        Error...
                    </Typography>
                ) : null }
            </form>
        )
    }
}


const mapStateToProps = (state) => {
    // console.log(state)
    return{
        loginError: state.loginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        Login: (credentials) => dispatch(Login(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(LoginPage))