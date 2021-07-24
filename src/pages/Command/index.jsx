import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Clickable from '../../components/Clickable';

const useStyles = makeStyles((theme) => ({
  tab: {
    backgroundColor: 'grey',
    paddingRight: '10px',
    paddingLeft: '10px',
    paddingTop: '1px',
    paddingBottom: '1px',
    color: 'white',
    font: '1rem Inconsolata, monospace',
  },
  console: {
    padding: '1rem',
    backgroundColor: '#2D2D2D',
    color: 'white',
    font: '0.85rem Inconsolata, monospace',
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  marginBottom: {
    marginBottom: theme.spacing(2),
  }
}));

//  consider rendering information from json file
//  {
//    image: [{
//      id: 'unable-to-find-image',
//      text: 'Unable to find image \'nginx:latest\' locally',
//      secondaryTitle: 'Unable to find image',
//      secondaryText: 'In the event when the user runs the command \'docker run nginx' and the latest version of nginx is not available locally...',
//    }, ...],
//    container: [{
//      id: 'unable-to-run-container',
//      text: '...',
//    }, ...],
//  }


// so i can do something like
// image.forEach(i => <Clickable id={i.id}>{i.text}</Clickable>

const DockerRun = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Clickable
        id="image-docker-run-cmd"
        component="span"
        className={classes.tab}
      >
        >> docker run nginx
      </Clickable>
      <Box className={classes.console}>
        <Clickable id="image-unable-to-find-image">
          Unable to find image 'nginx:latest' locally
        </Clickable>
        <Clickable id="image-pulling-from-library">
          latest: Pulling from library/nginx
        </Clickable>
        <Clickable id="image-layering">
          <Box>fc7181108d40: Already exists</Box>
          <Box>d2e987ca2267: Pull complete</Box>
          <Box>0b760b431b11: Pull complete</Box>
        </Clickable>
        <Clickable id="image-sha-digest">
          Digest: <br/>
          sha256:96fb261b66270b900ea5a2c17a26abbfabe95506e73c3a3c65869a6dbe83223a
        </Clickable>
        <Box>
          Status: Downloaded newer image for nginx:latest
        </Box>
      </Box>
    </Box>
  );
}

const DockerPull = () => {
  const classes = useStyles();
  return (
    <Box>
      <Clickable
        id="image-docker-run-cmd"
        component="span"
        className={classes.tab}
      >
        >> docker pull nginx
      </Clickable>
      <Box className={classes.console}>
        <Box>
          Using default tag: latest
        </Box>
        <Clickable id="image-pulling-from-library">
          latest: Pulling from library/nginx
        </Clickable>
        <Clickable id="image-layering">
          <Box>fc7181108d40: Pull complete</Box>
          <Box>d2e987ca2267: Pull complete</Box>
          <Box>0b760b431b11: Pull complete</Box>
        </Clickable>
        <Clickable id="image-sha-digest">
          Digest: <br/>
          sha256:96fb261b66270b900ea5a2c17a26abbfabe95506e73c3a3c65869a6dbe83223a
        </Clickable>
        <Box>
          Status: Downloaded newer image for nginx:latest
        </Box>
      </Box>
    </Box>
  );
}

const DockerPS = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Clickable
        id="image-docker-run-cmd"
        component="span"
        className={classes.tab}
      >
        >> docker ps
      </Clickable>
      <Box className={classes.console}>
        <Grid container justifyContent="flex-start" spacing={4}>
          <Grid item>
            <Box>CONTAINER ID</Box>
            <Box>fc7181108d40</Box>
          </Grid>
          <Grid item>
            <Box>IMAGE</Box>
            <Box>nginx</Box>
          </Grid>
          <Grid item>
            <Box>COMMAND</Box>
            <Box>"nginx -g 'daemon of..."</Box>
          </Grid>
          <Grid item>
            <Box>CREATED</Box>
            <Box>7 seconds ago</Box>
          </Grid>
          <Grid item>
            <Box>STATUS</Box>
            <Box>Up 6 seconds</Box>
          </Grid>
          <Grid item>
            <Box>PORTS</Box>
            <Box>80/tcp</Box>
          </Grid>
          <Grid item>
            <Box>NAMES</Box>
            <Box>silly_sammet</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const DockerPSA = () => {
  const classes = useStyles();
  return (
    <Box>
      <Clickable
        id="image-docker-run-cmd"
        component="span"
        className={classes.tab}
      >
        >> docker ps -a
      </Clickable>
      <Box className={classes.console}>
        <Grid container justifyContent="flex-start" spacing={4}>
          <Grid item>
            <Box>CONTAINER ID</Box>
            <Box>fc7181108d40</Box>
            <Box>cff8ac918a2f</Box>
          </Grid>
          <Grid item>
            <Box>IMAGE</Box>
            <Box>nginx</Box>
            <Box>redis</Box>
          </Grid>
          <Grid item>
            <Box>COMMAND</Box>
            <Box>"nginx -g 'daemon of..."</Box>
            <Box>"docker-entrypoint.s..."</Box>
          </Grid>
          <Grid item>
            <Box>CREATED</Box>
            <Box>7 seconds ago</Box>
            <Box>6 seconds ago</Box>
          </Grid>
          <Grid item>
            <Box>STATUS</Box>
            <Box>Up 6 seconds</Box>
            <Box>Exited (0) 3 seconds ago</Box>
          </Grid>
          <Grid item>
            <Box>NAMES</Box>
            <Box>silly_sammet</Box>
            <Box>relaxed_aryabhata</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default function Command() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h1" noWrap>
        Docker Commands
      </Typography>
      <br/>
      <Typography variant="body1">
        We will go through most commonly used Docker commands and understanding how to read the information printed to the console.
      </Typography>
      <br/>
      <Divider className={classes.divider} />
      <DockerRun />
      <DockerPull />
      <Divider className={classes.divider}/>
      <DockerPS />
      <DockerPSA />
    </Box>
  );
}