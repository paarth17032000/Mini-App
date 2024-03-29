import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar, Button} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PeopleIcon from '@material-ui/icons/People';
import AppBar from '@material-ui/core/AppBar';
import Popover from '@material-ui/core/Popover';
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
    flexGrow: 1
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main
  }, 
  name: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  logOut: {
    padding:  theme.spacing(1,2),
  },
  marginBox: {
    margin: theme.spacing(4,4)
  }
});



class Layout extends Component {
  constructor(props){
    super(props)
    this.state = {
      mobileOpen: false, 
      anchorEl: null
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

  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget
    })
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    })
  };

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
          icon: <PeopleIcon className={classes.icons}/>,
          path: '/users'
      },
      {
          text: 'My Posts',
          icon: <AccountCircleIcon className={classes.icons}/>,
          path: '/myposts'
      }
    ]
  
    const drawer = (
      <div>
        <Box 
          display="flex" 
          alignItems="center"
          // m={4,4}
          className={`${classes.toolbar} ${classes.marginBox}`}
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
    const open = Boolean(this.state.anchorEl);
    const id = open ? 'simple-popover' : undefined;
    
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
            <div className={classes.space}></div>
            <Box
            display="flex"
            alignItems="center"
            className={classes.name}
            >
              <Typography variant="h6" noWrap>
                {JSON.parse(localStorage.getItem('user')).name.toUpperCase()}
              </Typography>
              <Avatar 
              aria-describedby={id}
              color="primary" 
              variant="rounded"
              className={classes.avatar}
              onClick={this.handleClick}
              >
                {JSON.parse(localStorage.getItem('user')).name[0].toUpperCase()}
              </Avatar>
              <Popover
                id={id}
                open={open}
                anchorEl={this.state.anchorEl}
                onClose={this.handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <Button 
                className={classes.logOut}
                component={Link}
                onClick={this.handleLogout}
                to='/'
                >
                  Log Out
                </Button>
              </Popover>
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







// const useStyles = makeStyles((theme) => ({
// 
// }));

// export default function SimplePopover() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

// const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;

// }