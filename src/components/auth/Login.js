import React, {Component} from 'react'
import { Button, TextField } from '@material-ui/core'
// import { Login } from '../../redux/actions.js/authActions'
// import { connect } from 'react-redux'
// import { compose } from 'redux'
import { withStyles } from '@material-ui/styles'
import { Login } from '../../api/apiCalls'

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
            username: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        Login(this.state)
        this.setState({emai: '', username: ''})
        // this.props.Login(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        // console.log( this.props )
        const {classes} = this.props
        // console.log('err: ',authError)
        return (
            <form 
            onSubmit={this.handleSubmit}
            className={classes.root}
            >
                <TextField 
                type="email"
                name="email"
                className={classes.field}
                label="Email"
                placeholder="Email.... "
                onChange={this.handleChange}
                />
                <TextField 
                type="text"
                name="username"
                className={classes.field}
                label="Username"
                placeholder="Username.... "
                onChange={this.handleChange}
                />
                <Button 
                variant="contained"
                color="primary"
                className={classes.field}
                type="submit"
                >
                    Login
                </Button>
                {/* { authError ? (
                    <Typography variant="h4" color="error">
                        Error...
                    </Typography>
                ) : null } */}
            </form>
        )
    }
}

export default  withStyles(styles, {withTheme: true})(LoginPage)

// const mapStateToProps = (state) => {
//     return{
//         authError: state.auth.loginError
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         Login: (cred) => dispatch(Login(cred))
//     }
// }

// export default compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withStyles(styles, {withTheme: true})
// )(LoginPage)
