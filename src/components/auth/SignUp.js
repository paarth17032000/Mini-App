import React, {Component} from 'react'
import { Button, Card, CardContent , TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { SignUp } from '../../redux/actions/authActions'
import { connect } from 'react-redux'

const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: '100vh',
        backgroundColor: '#2C3A47'
    },
    form: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(1,3)
    },
    card: {
        width: 375,
        margin: theme.spacing(2)
    },
    field: {
        margin: theme.spacing(2,0)
    }, 
    btn: {
        margin: theme.spacing(3,0)
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
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h4" align="center" color="secondary">
                            SignUp Form
                        </Typography>
                        <form 
                        onSubmit={this.handleSubmit}
                        className={classes.form}
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
                            color="secondary"
                            type="submit"
                            className={classes.btn}
                            >
                                Sign Up
                            </Button>
                            { registerError ? (
                                <Typography variant="h4" align="center" color="error">
                                    {registerError}
                                </Typography>
                            ) : null }
                        </form>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
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
