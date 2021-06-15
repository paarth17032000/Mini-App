import React from 'react'
import PostSummary from './PostSummary'
import { Grid } from '@material-ui/core'


export default function PostLists(props) {
    const {posts} = props
    return (
        <Grid container spacing={3}>
            { posts && posts.map((post) => {
                return(
                    <Grid item xs={9} sm={9} md={6} lg={4} key={`${post.username}${post.id}`}>
                        <PostSummary post={post}/> 
                    </Grid>
                )
            })}
        </Grid>
    )
}
