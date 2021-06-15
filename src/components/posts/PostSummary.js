import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Typography, IconButton, Box, Divider } from '@material-ui/core';
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


export default function PostSummary({post}) {
  const classes = useStyles();

  const handleDelete = () => {
    console.log(post)
    Delete(post)
  }

  const handleClick = () => {
    console.log(post)
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
        // subheader={post.id}
        // subheader="September 14, 2016"
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <Divider />
      <CardContent className={classes.back}>
        <Typography variant="h5" color="textSecondary" component="p">
            {post.title}
          {/* This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like. */}
        </Typography>
        <Typography variant="h6" color="textSecondary" component="p">
            {post.desc}
          {/* This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like. */}
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