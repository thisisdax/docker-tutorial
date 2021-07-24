import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Details from '../../../pages/Details';
import { SecondaryContext } from '../../App';


const useStyles = drawerWidth => makeStyles((theme) => ({
  drawer: {
    width: `calc((100% - ${drawerWidth}px)/2)`,
    flexShrink: 0,
  },
  drawerPaper: {
    width: `calc((100% - ${drawerWidth}px)/2)`,
  },
  secondary: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  closeButton: {
    float: 'right',
  },
}));

// secondary screen on the right that will display current selected id
// can be handled by context?
export default function Secondary(props) {
  const { info, setInfo } = useContext(SecondaryContext);
  const classes = useStyles(props.drawerWidth)();

  const closeButton = () => {
    setInfo('');
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={!!info}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Box>
        <IconButton
          onClick={closeButton} className={classes.closeButton}>
          <CloseIcon/>
        </IconButton>
      </Box>
      <div className={classes.secondary}>
        <Details id={info} />
      </div>
    </Drawer>
  );
}