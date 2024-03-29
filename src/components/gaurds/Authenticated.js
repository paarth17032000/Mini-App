import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Layout from '../layout/Layout'

// lets a user in dashboard when it is authenticated 
// and done basically to display layout different than login and signup
// work better with real time

class Authenticated extends Component {
    componentDidUpdate(){
        let username = JSON.parse(localStorage.getItem('user')).username
        if(!username) 
            this.props.history.push('/')
    }
    render() {
        const {children} = this.props
        return (<Layout>{children}</Layout>)
    }
}

export default withRouter(Authenticated)

// const mapStateToProps = (state) => {
//     return{
//         user: state.user
//     }
// }

// export default connect(mapStateToProps)(withRouter(Authenticated))