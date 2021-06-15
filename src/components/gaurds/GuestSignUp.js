import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'

class GuestSignUp extends Component {
    componentDidUpdate(){
        if(this.props.user)
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

export default connect(mapStateToProps)(withRouter(GuestSignUp))