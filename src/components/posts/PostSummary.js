import React, { Component } from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton, Box, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Delete, Like, UnLike } from '../../api/apiCalls';
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    minWidth: 300,
  },
  cardContent: {
    // height: 175,
  },
  like:{
    backgroundColor: '1px solid #2C3A47'
  }
})


class PostSummary extends Component{
  constructor(props){
    super(props)
    this.state = {
      likes: this.props.post.likes,
      count: 0
    }
  }
  render(){
    const {classes, post} = this.props

    const handleDelete = () => {
      Delete(post)
    }

    const handleClick = () => {
      if(this.state.count === 0){
        Like(post)
        this.setState({
          likes: this.state.likes + 1,
          count: this.state.count + 1
        })
      }else if(this.state.count === 1){
        UnLike(post)
        this.setState({
          likes: this.state.likes - 1,
          count: this.state.count - 1
        })
      }
      
      
    }

    return (
      <Card className={classes.root}>
        <CardHeader
          action={ this.props.delete ? (
              <IconButton onClick={handleDelete} >
                <DeleteIcon />
              </IconButton>
            ) : null
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
              { this.state.count === 0 ? (
                <IconButton 
                onClick={handleClick}
                >
                  <FavoriteBorderIcon className={classes.like} />
                </IconButton>
              ) : (
                <IconButton 
                color="secondary"
                onClick={handleClick}
                >
                  <FavoriteIcon className={classes.unlike} />
                </IconButton>
              )}
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