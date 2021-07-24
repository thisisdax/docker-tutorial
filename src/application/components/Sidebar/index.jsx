import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { SecondaryContext } from '../../App';

const useStyles = drawerWidth => makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const routes = [
    {
      text: 'Home',
      path: '',
    },
    {
      text: 'Command',
      path: '/command',
    },
    {
      text: 'Image',
      path: '/image',
    },
    {
      text: 'Container',
      path: '/container',
    },
    {
      text: 'Network',
      path: '/network',
    },
    {
      text: 'Volume',
      path: '/volume',
    },
  ]


export default function Sidebar(props) {
  const classes = useStyles(props.drawerWidth)();
  const { setInfo } = useContext(SecondaryContext);
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <Divider />
      <List>
        {routes.map((link, index) => (
          <Link onClick={() => setInfo('')} to={link.path}>
            <ListItem button key={link.text}>
              <ListItemText primary={link.text} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}