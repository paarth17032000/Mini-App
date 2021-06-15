import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Layout from '../layout/Layout'

class Authenticated extends Component {
    componentDidUpdate(){
        if(!this.props.user[0].id) 
            this.props.history.push('/')
    }
    render() {
        const {children} = this.props
        return (<Layout>{children}</Layout>)
    }
}

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(Authenticated))