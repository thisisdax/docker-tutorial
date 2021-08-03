import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import LayeredArchitecture from '../LayeredArchitecture';

const useStyles = makeStyles((theme) => ({
  divider: {
    marginBottom: theme.spacing(3),
  },
}));

export default function Dockerfile() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h3">
        Dockerfile
      </Typography>
      <Divider className={classes.divider}/>
      <Typography variant="body1">
        A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.
        Using docker build users can create an automated build that executes several command-line instructions in succession.
      </Typography>
      <br/>
      <Divider className={classes.divider}/>
      <LayeredArchitecture />
      <Divider className={classes.divider}/>
    </Box>
  );
}
