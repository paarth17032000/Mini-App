import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'

// it is done basically to display layout different than dashboard
// work better with real time database

class GuestSignUp extends Component {
    componentDidUpdate(){
        // console.log(this.props.user)
        if(this.props.user)
            this.props.history.push('/dashboard')
    }
    render() {
        const {children} = this.props
        return  <>{children}</>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(GuestSignUp))



// class GuestSignUp extends Component {
//     componentDidMount(){
//         let username = JSON.parse(localStorage.getItem('user')).username
//         if(username)
//             this.props.history.push('/dashboard')
//     }
//     render() {
//         const {children} = this.props
//         return  <>{children}</>
//     }
// }

// export default withRouter(GuestSignUp)