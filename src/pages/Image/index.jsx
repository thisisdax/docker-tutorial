import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Clickable from '../../components/Clickable';

const useStyles = makeStyles((theme) => ({
  editorTab: {
    backgroundColor: 'grey',
    paddingRight: '10px',
    paddingLeft: '10px',
    paddingTop: '1px',
    paddingBottom: '1px',
    color: 'white',
    font: '1rem Monaco, monospace',
  },
  editor: {
    padding: '1rem',
    backgroundColor: '#2D2D2D',
    color: 'white',
    font: '1rem Monaco, monospace',
  },
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

const Dockerfile = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Clickable
        id="image-dockerfile"
        component="span"
        className={classes.editorTab}
      >
        Dockerfile
      </Clickable>
      <Box className={classes.editor}>// TODO:: create Dockerfile for this app and paste it here</Box>
      <Clickable
        id="image-dockerfile-from"
        className={classes.editor}
      >
        FROM Ubuntu
      </Clickable>
      <Clickable
        id="image-dockerfile-run-apt-get"
        className={classes.editor}
      >
        <Box>RUN apt-get update</Box>
        <Box>RUN apt-get install python</Box>
      </Clickable>
      <Clickable
        id="image-dockerfile-run-pip-install"
        className={classes.editor}
      >
        <Box>RUN pip install flask</Box>
        <Box>RUN pip install flask-mysql</Box>
      </Clickable>
      <Clickable
        id="image-dockerfile-copy"
        className={classes.editor}
      >
        COPY . /opt/source-code
      </Clickable>
      <Clickable
        id="image-dockerfile-entrypoint"
        className={classes.editor}
      >
        ENTRYPOINT FLASK_APP=/opt/source-code/app.py flask run
      </Clickable>
    </Box>
  )
}

const DockerBuild = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Clickable
        id="image-docker-run-cmd"
        component="span"
        className={classes.tab}
      >
        >> docker build Dockerfile
      </Clickable>
      <Box className={classes.console}>
        TODO:: create Dockerfile for this frontend app and run it here as a tutorial
      </Box>
    </Box>
  );
}

const DockerPush = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Clickable
        id="image-docker-run-cmd"
        component="span"
        className={classes.tab}
      >
        >> docker push
      </Clickable>
      <Box className={classes.console}>
        TODO:: create Dockerfile for this frontend app and run it here as a tutorial
      </Box>
    </Box>
  );
}

export default function Image() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h1" noWrap>
        Docker Image
      </Typography>
      <br/>
      <Typography variant="body1">
        Docker Images are templates of what a container will build upon.
      </Typography>
      <br/>
      <Divider className={classes.divider} />
      <Dockerfile />
      <DockerBuild />
      <DockerPush />
    </Box>
  );
}