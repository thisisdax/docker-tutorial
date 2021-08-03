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

export default function LayeredArchitecture() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h3">
        Layered Architecture
      </Typography>
      <Divider className={classes.divider}/>
      <Typography variant="body1">
        This Dockerfile contains six commands, each of which creates a layer. <br />
        The FROM statement starts out by creating a layer from the node:alpine image. <br />
        The WORKDIR command sets the working directory for our container. <br />
        The COPY command copies the package.json to our container. <br />
        The RUN command builds your application using the npm command. <br />
        Next COPY command copies the remaining files to our container. <br />
        Finally, the last layer specifies what command to run within the container. <br />
      </Typography><br/>
    </Box>
  );
}