import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'

// it is done basically to display layout different than dashboard
// work better with real time database

class GuestLogin extends Component {
    componentDidUpdate(){
        if(this.props.user.id)
            this.props.history.push('/dashboard')
    }
    render() {
        const {children} = this.props
        return  <>{children}</>
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(GuestLogin))

