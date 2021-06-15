import React, { Component } from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'

class GuestLogin extends Component {
    componentDidUpdate(){
        // console.log('hello',this.props.user[0].id)
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