import React from 'react';
import { Card, CardHeader, CardContent, CardActions, Typography, IconButton, Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import { Delete, Like } from '../../api/apiCalls';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 300,
  },
  media: {
    height: 0,
    // paddingTop: '46.25%',
    // paddingTop: '56.25%', 
    // 16:9
  },
  like: {
    //   color: theme.palette.primary.main,
  },
  back: {
    // backgroundColor: 'red'
  }
}));


export default function PostSummary(props) {
  const classes = useStyles();
  const {post} = props

  const handleDelete = () => {
    Delete(post)
  }

  const handleClick = () => {
    Like(post)
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton onClick={handleDelete} aria-label="settings">
            <DeleteIcon />
          </IconButton>
        }
        title={post.username}
      />
      <Divider />
      <CardContent className={classes.back}>
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
            {/* <FavoriteIcon className={classes.like}/> */}
            </IconButton>
            <Typography variant="body1">
                {post.likes}
            </Typography>
        </Box>
      </CardActions>
    </Card>
  );
}