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

export default function DockerBuild() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h3">
        Docker Build
      </Typography>
      <Divider className={classes.divider}/>
      <Typography variant="body1">
        The docker build command builds Docker images from a Dockerfile and a “context”.
        A build’s context is the set of files located in the specified PATH or URL.
        The build process can refer to any of the files in the context.
        For example, your build can use a COPY instruction to reference a file in the context.
      </Typography><br />
      <Divider className={classes.divider}/>
      <LayeredArchitecture />
      <Divider className={classes.divider}/>
    </Box>
  );
}
