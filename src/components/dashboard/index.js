import React, {Component} from 'react'
import PostLists from '../posts/PostLists'
import {URL_POSTS} from '../../api/baseUrl/BaseUrl'
import { Typography } from '@material-ui/core'

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: [],
        }
    }
    async componentDidMount(){
        let res = await fetch(URL_POSTS)
        let data = await res.json()
        console.log(data)
        this.setState({
            posts: data
        })
    }
    render() {
        return (
            <>
                { this.state.posts ? (
                    <PostLists posts={this.state.posts}/>
                ) : (
                    <Typography variant="h4" color="secondary">
                        No posts available...
                    </Typography>
                )}
            </>
        )
    }
}