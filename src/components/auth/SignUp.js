import React, {Component} from 'react'
import { Button, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { SignUp } from '../../redux/actions/actions'
import { connect } from 'react-redux'

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: '100vh'
    },
    field: {
        margin: theme.spacing(2,0)
    }
})

class RegisterPage extends Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            username: '',
            name: '',
            password: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.SignUp(this.state)
        // SignUp(this.state)
        this.setState({
            email: '', name: '', username: '',password: ''
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const {classes, registerError} = this.props
        return (
            <form 
            onSubmit={this.handleSubmit}
            className={classes.root}
            >
                <TextField 
                type="text"
                className={classes.field}
                name="name"
                value={this.state.name}
                label="Name"
                placeholder="Enter Name.... "
                onChange={this.handleChange}
                />
                <TextField 
                type="email"
                className={classes.field}
                name="email"
                value={this.state.email}
                label="Email"
                placeholder="Email...."
                onChange={this.handleChange}
                />
                <TextField 
                type="text"
                className={classes.field}
                name="username"
                value={this.state.username}
                label="Username"
                placeholder="Username...."
                onChange={this.handleChange}
                />
                <TextField 
                type="password"
                className={classes.field}
                name="password"
                value={this.state.password}
                label="Password"
                placeholder="Password...."
                onChange={this.handleChange}
                />
                <Button 
                variant="contained"
                color="primary"
                type="submit"
                className={classes.field}
                >
                    Sign Up
                </Button>
                { registerError ? (
                    <Typography variant="h4" color="error">
                        {registerError}
                    </Typography>
                ) : null }
            </form>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return{
        registerError: state.registerError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        SignUp: (credentials) => dispatch(SignUp(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(RegisterPage))
