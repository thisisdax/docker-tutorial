import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginBottom: theme.spacing(3),
  },
}));

export default function HostOS() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h3">
        Host OS
      </Typography>
      <Divider className={classes.divider}/>
      <Typography variant="body1">
        Host refers to the machine managing the containers and images and sometimes referred as Docker Host.
        <br/><br/>
        The Docker Host is the base traditional OS server where the OS and processes are running in normal (non-container) mode. The Docker Engine is being installed and run on the Docker Host.
        <br/><br/>
        Host OS would refer to the OS kernal that Docker Host uses.
      </Typography>
    </Box>
  );
}