import { Grid, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import { URL_POSTS } from '../../api/baseUrl/BaseUrl'
import PostSummary from './PostSummary'

export default class OwnPosts extends Component {
    constructor(props){
        super(props)
        this.state = {
            myPosts: []
        }
    }
    componentDidMount(){
        let username = JSON.parse(localStorage.getItem('user')).username
        fetch(URL_POSTS).then((res) => {
            return res.json()
        }).then((posts) => {
            return posts.filter(post => post.username === username)
        }).then((myPosts) => {
            this.setState({
                myPosts
            })
        }).catch((err) => {
            console.log(err.message)
        })
    }
    render() {
        return (
            <Grid container spacing={3}>
                { this.state.myPosts.length !== 0 ? (
                    this.state.myPosts.map((post) => {
                        return(
                            <Grid item xs={9} sm={9} md={6} lg={4} key={`${post.username}${post.id}`}>
                                <PostSummary post={post} delete={true} /> 
                            </Grid>
                        )
                    })
                ) : (
                    <Typography variant="h4" color="secondary">
                        No posts yet.. You look forward to see some of your posts..
                    </Typography>
                )}
            </Grid>
        )
    }
}
