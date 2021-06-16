import React, {Component} from 'react'
import { Button, Card, CardContent , TextField, Typography } from '@material-ui/core'
import { Login } from '../../redux/actions/authActions'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/styles'


const styles = theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: '100vh',
    },
    form: {
        display: "flex",
        flexDirection: "column",
        margin: theme.spacing(2)
    },
    card: {
        width: 375,
    },
    field: {
        margin: theme.spacing(2,0)
    }, 
    btn: {
        margin: theme.spacing(3,0)
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
        this.props.Login(this.state)
        this.setState({email: '', username: '', password: ''})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        const {classes, loginError} = this.props
        return (
            <div className={classes.root}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="h4" align="center" color="secondary">
                            Login Form
                        </Typography>
                        <form 
                        onSubmit={this.handleSubmit}
                        className={classes.form}
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
                            color="secondary"
                            value={this.state}
                            className={`${classes.btn} btn`}
                            type="submit"
                            >
                                Login
                            </Button>
                            { loginError ? (
                                <Typography variant="h4" align="center" color="error">
                                    Error...
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
        loginError: state.loginError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        Login: (credentials) => dispatch(Login(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(LoginPage))