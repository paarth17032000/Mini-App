import React from 'react'
import PostSummary from './PostSummary'
import { Grid } from '@material-ui/core'


export default function PostLists(props) {
    const {posts} = props
    return (
        <Grid container spacing={3}>
            { posts && posts.map((post) => {
                // console.log(post, '1')
                if(post.length > 0){
                    // console.log(post)
                    return post.map((singlePost) => {
                        return(
                            <Grid item xs={9} sm={9} md={6} lg={4} key={`${singlePost.username}${singlePost.id}`}>
                                <PostSummary post={singlePost}/> 
                            </Grid>
                        )
                    })
                }})}
        </Grid>
    )
}