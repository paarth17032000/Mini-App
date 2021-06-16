import React, { Component } from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton, Box, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Delete, Like } from '../../api/apiCalls';
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    minWidth: 300,
  },
  cardContent: {
    // height: 175,
  }
})


class PostSummary extends Component{
  constructor(props){
    super(props)
    this.state = {
      likes: this.props.post.likes
    }
  }
  render(){
    // console.log(this.state)
    const {classes} = this.props
    const {post} = this.props

    const handleDelete = () => {
      Delete(post)
    }

    const handleClick = () => {
      Like(post)
      this.setState({
        likes: this.state.likes + 1
      })
    }

    return (
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton onClick={handleDelete} aria-label="settings">
              <DeleteIcon />
            </IconButton>
          }
          title={`@${post.username}`}
        />
        <Divider />
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" color="textSecondary" component="p">
              {post.title}
          </Typography>
          <Typography variant="h6" color="textSecondary" component="p">
              {post.desc}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions disableSpacing>
          <Box
          display="flex"
          alignItems="center"
          className={classes.box}
          >
              <IconButton 
              onClick={handleClick}
              >
                <FavoriteBorderIcon className={classes.like} />
              </IconButton>
              <Typography variant="body1">
                  {this.state.likes}
              </Typography>
          </Box>
        </CardActions>
      </Card>
    );
  }
}

export default withRouter( withStyles(styles,{withtheme: true})(PostSummary))