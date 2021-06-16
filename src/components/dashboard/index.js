import React, {Component} from 'react'
import PostLists from '../posts/PostLists'
import {URL_POSTS} from '../../api/baseUrl/BaseUrl'
import { Typography } from '@material-ui/core'
import { connect } from 'react-redux'

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
        }
    }
    componentDidMount(){
        fetch(URL_POSTS).then((res) => {
            return res.json()
        }).then((posts) => {
            let postsToSee = this.props.usersToFollow.map((username) => {
                console.log(username)
                return(
                    posts.filter(post => {
                        // console.log(post, post.username, username)
                        if(post.username === username){
                            return post
                        }
                    })
                )
            })
            return postsToSee
        }).then((postsToSee) => {
            console.log(postsToSee)
            this.setState({
                posts: postsToSee
            })
        }).catch((err) => {
            console.log(err.message)
        })
    }
    render() {
        return (
            <>
                {/* {console.log(this.state.posts.length)} */}
                { this.state.posts.length ? (
                    <PostLists posts={this.state.posts}/>
                ) : (
                    <Typography variant="h4" color="secondary">
                        No posts available, you may follow some users...
                    </Typography>
                )}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        // posts: state.posts
        usersToFollow: state.usersToFollow
    }
}

export default connect(mapStateToProps)(Dashboard)