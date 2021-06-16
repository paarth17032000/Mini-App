import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar, Button } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/styles';

const drawerWidth = 267;

const styles = (theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    height: '62px',
    backgroundColor: '#FFFFFF',
    color: theme.palette.secondary.main
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    backgroundColor: theme.palette.secondary.main, 
    color: 'white',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(4),
  },
  icons: {
    color: 'white',
    margin: theme.spacing(0,3,0,4)
  },
  logo: {
    padding: theme.spacing(0,2,0,0),
  },
  divider: {
    backgroundColor: '#DFE0EB'
  },
  list: {
    margin: theme.spacing(4,0,0,0)
  },
  listItem: {
    height: '56px',
  },
  space: {
    flexGrow: 1,
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }
});



class Layout extends Component {
  constructor(props){
    super(props)
    this.state = {
      mobileOpen: false, 
    }
  }

  handleDrawerToggle = () => {
    this.setState({
      mobileOpen: !this.state.mobileOpen
    })
  };

  handleLogout = () => {
    localStorage.setItem('user', null)
  }

  render() {

    const { window, classes} = this.props;
    

    const menuItems = [
      {
          text: 'Dashboard',
          icon: <HomeIcon className={classes.icons}/>,
          path: '/dashboard'
      },
      {
          text: 'Create New Post',
          icon: <AddBoxIcon className={classes.icons}/>,
          path: '/post'
      },
      {
          text: 'Other Users',
          icon: <AccountCircleIcon className={classes.icons}/>,
          path: '/users'
      }
    ]
  
    const drawer = (
      <div>
        <Box 
          display="flex" 
          alignItems="center"
          m={4,4}
          className={classes.toolbar}
        >
          <Typography variant="h5">
              Social House
          </Typography>
        </Box>
        <List className={classes.list}>
          {menuItems.map( item => {
          return( 
            <ListItem
              button
              component={NavLink}
              to={item.path}
              className={classes.listItem}
              key={item.text}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          )
          })}
        </List>
        <Divider className={classes.divider}/>
      </div>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
    
    
    return (
      <div className={classes.root}>


        {/* Navbar */}
        <AppBar elevation={0} position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Box
            display="flex"
            alignItems="center"
            className={classes.space}>
              <Typography variant="h6" className="font-20">
                {JSON.parse(localStorage.getItem('user')).name}
              </Typography>
              <Avatar className={classes.avatar}>{JSON.parse(localStorage.getItem('user')).name[0]}</Avatar>
            </Box>
            <Box>
               <Button 
               component={Link}
               onClick={this.handleLogout}
               to='/'
               >
                Log Out
              </Button>
            </Box>
          </Toolbar>
        </AppBar>


        {/* SideDrawer */}
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor='left'
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, 
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
  

        {/* All the main content of pages */}
        <div className={classes.content}>
          <div className={classes.toolbar}></div>
              {this.props.children}
          </div>
        </div>
    )
  }
}

export default withStyles(styles, {withTheme: true})(Layout)