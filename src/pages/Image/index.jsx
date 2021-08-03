import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Clickable from '../../components/Clickable';
import Popover from '../../components/Popover';

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
  clickable: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(50,205,50,0.5)',
    },
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

const PythonDockerfile = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Popover
        id="image-dockerfile"
        className={classes.editorTab}
        content={
          <Typography>
            A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.
            Using docker build users can create an automated build that executes several command-line instructions in succession.
          </Typography>
        }
      >
        <Clickable
          component="span"
          className={classes.editorTab}
        >
          Dockerfile
        </Clickable>
      </Popover>
      <Box className={classes.editor}>// TODO:: create Dockerfile for this app and paste it here</Box>
      <Popover
        id="image-dockerfile-from"
        className={classes.editor}
        content={
          <Typography>
            ```FROM``` command will create a layer from the Ubuntu Docker image. The numbers after the colon represents the specific version of Ubuntu we wish to use.
          </Typography>
        }
      >
        <Clickable
          className={classes.editor}
        >
          FROM ubuntu:18.04
        </Clickable>
      </Popover>
      <Popover
        id="image-dockerfile-run-apt-get"
        className={classes.editor}
        content={
          <Typography>
            We use the ```RUN``` command to execute code.
            'apt-get' is a command-line tool which helps in handling packages in Linux.
            Its main task is to retrieve the information and packages from the authenticated sources for installation,
            upgrade and removal of packages along with their dependencies.
            After creating the layer from the Ubuntu image,  we RUN apt-get to update and install our required packages and dependencies.
          </Typography>
        }
      >
        <Clickable
          className={classes.editor}
        >
          <Box>RUN apt-get update</Box>
          <Box>RUN apt-get install python</Box>
        </Clickable>
      </Popover>
      <Popover
        id="image-dockerfile-run-pip-install"
        className={classes.editor}
        content={
          <Typography>
            After creating the layer for installing python on the previous command with 'apt-get', we will not use pip to install the required dependencies to run our application.
          </Typography>
        }
      >
        <Clickable
          className={classes.editor}
        >
          <Box>RUN pip install flask</Box>
          <Box>RUN pip install flask-mysql</Box>
        </Clickable>
      </Popover>
      <Popover
        id="image-dockerfile-copy"
        className={classes.editor}
        content={
          <Typography>
            Creates a layer that copies all files and folder from the current location where Dockerfile is residing, to /opt/source-code which will reside in the Docker container.
          </Typography>
        }
      >
        <Clickable
          className={classes.editor}
        >
          COPY . /opt/source-code
        </Clickable>
      </Popover>
      <Popover
        id="image-dockerfile-entrypoint"
        className={classes.editor}
        content={
          <Typography>
            In Dockerfiles, an ENTRYPOINT instruction is used to set executables that will always run when the container is initiated.
            Unlike CMD commands, ENTRYPOINT commands cannot be ignored or overridden—even when the container runs with command line arguments stated.
          </Typography>
        }
      >
        <Clickable
          id="image-dockerfile-entrypoint"
          className={classes.editor}
        >
          ENTRYPOINT FLASK_APP=/opt/source-code/app.py flask run
        </Clickable>
      </Popover>
    </Box>
  )
}

// The FROM statement starts out by creating a layer from the node:alpine image. <br />
// The WORKDIR command sets the working directory for our container. <br />
// The COPY command copies the package.json to our container. <br />
// The RUN command builds your application using the npm command. <br />
// Next COPY command copies the remaining files to our container. <br />
// Finally, the last layer specifies what command to run within the container. <br />

const FrontendDockerfile = () => {
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
      <Popover
        id="image-dockerfile-from"
        className={classes.editor}
        content={
          <Typography>
            The FROM statement starts out by creating a layer from the node:alpine image.
          </Typography>
        }
      >
        <Clickable className={classes.editor}>
          # get the base node image <br/>
          FROM node:alpine as builder
        </Clickable>
      </Popover>
      <Popover
        id="image-dockerfile-workdir"
        className={classes.editor}
        content={
          <Typography>
            The WORKDIR command sets the working directory for our container.
          </Typography>
        }
      >
        <Clickable className={classes.editor}>
          # set the working dir for container <br/>
          WORKDIR /frontend
        </Clickable>
      </Popover>
      <Popover
        id="image-dockerfile-copy"
        className={classes.editor}
        content={
          <Typography>
            The COPY command copies the package.json to our container.
          </Typography>
        }
      >
        <Clickable className={classes.editor}>
          # copy the json file first <br/>
          COPY ./package.json /frontend
        </Clickable>
      </Popover>
      <Popover
        id="image-dockerfile-run"
        className={classes.editor}
        content={
          <Typography>
            The RUN command builds your application using the npm command.
          </Typography>
        }
      >
        <Clickable className={classes.editor}>
          # install npm dependencies <br/>
          RUN npm install
        </Clickable>
      </Popover>
      <Popover
        id="image-dockerfile-copy"
        className={classes.editor}
        content={
          <Typography>
            Next COPY command copies the remaining files to our container.
          </Typography>
        }
      >
        <Clickable className={classes.editor}>
          # copy other project files <br/>
          COPY . .
        </Clickable>
      </Popover>
      <Popover
        id="image-dockerfile-cmd"
        className={classes.editor}
        content={
          <Typography>
            Finally, the last layer specifies what command to run within the container.
          </Typography>
        }
      >
        <Clickable className={classes.editor}>
          # build the folder <br/>
          CMD [ "npm", "run", "start" ]
        </Clickable>
      </Popover>
    </Box>
  );
}

const DockerBuild = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Clickable
        id="image-docker-build"
        component="span"
        className={classes.tab}
      >
        >> docker build Dockerfile
      </Clickable>
      <Box className={classes.console}>
        <Clickable>
          Sending build context to Docker daemon  224.2MB
        </Clickable>
        <Clickable>
          Step 1/6 : FROM node:alpine as builder <br/>
          alpine: Pulling from library/node <br/>
          540db60ca938: Pull complete <br/>
          fe289da0f830: Pull complete <br/>
          c5a1e48e74e5: Pull complete <br/>
          63ccc02b1289: Pull complete <br/>
          Digest: sha256:50b33102c307e04f73817dad87cdae145b14782875495ddd950b5a48e4937c70 <br/>
          Status: Downloaded newer image for node:alpine <br/>
          ---> 4d2c046835fc <br/>
        </Clickable>
        <br/>
        <Clickable>
          Step 2/6 : WORKDIR /frontend <br/>
          ---> Running in a37701cd5d24 <br/>
          Removing intermediate container a37701cd5d24 <br/>
          ---> bf3c1a077617 <br/>
        </Clickable>
        <br/>
        <Clickable>
          Step 3/6 : COPY ./package.json /frontend <br/>
          ---> b344a8da984f <br/>
        </Clickable>
        <br/>
        <Clickable>
          Step 4/6 : RUN npm install <br/>
          ---> Running in 5d96c04139b1 <br/>
          Removing intermediate container 5d96c04139b1 <br/>
          ---> 1993daf3a9d1 <br/>
        </Clickable>
        <br/>
        <Clickable>
          Step 5/6 : COPY . . <br/>
          ---> f2192b38321d <br/>
        </Clickable>
        <br/>
        <Clickable>
          Step 6/6 : CMD [ "npm", "run", "start" ] <br/>
          ---> Running in 93386cdd3090 <br/>
          Removing intermediate container 93386cdd3090 <br/>
          ---> bde3020912ca <br/>
          Successfully built bde3020912ca <br/>
        </Clickable>
      </Box>
    </Box>
  );
}

const DockerImageList = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Clickable
        id="image-docker-image-list"
        component="span"
        className={classes.tab}
      >
        >> docker image ls
      </Clickable>
      <Box className={classes.console}>
        <Grid container justifyContent="flex-start" spacing={4}>
          <Grid item>
            <Box>REPOSITORY</Box>
            <Box>&lt;none&gt;</Box>
          </Grid>
          <Grid item>
            <Box>TAG</Box>
            <Box>&lt;none&gt;</Box>
          </Grid>
          <Grid item>
            <Box>IMAGE ID</Box>
            <Box>bde3020912ca</Box>
          </Grid>
          <Grid item>
            <Box>CREATED</Box>
            <Box>31 seconds ago</Box>
          </Grid>
          <Grid item>
            <Box>SIZE</Box>
            <Box>649MB</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

const DockerTag = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Clickable
        id="image-docker-image-list"
        component="span"
        className={classes.tab}
      >
        >> docker tag bde3020912ca docker-tutorial
      </Clickable>
      <Box className={classes.console}>
        <Grid container justifyContent="flex-start" spacing={4}>
          <Grid item>
            <Box>REPOSITORY</Box>
            <Box>docker-tutorial</Box>
          </Grid>
          <Grid item>
            <Box>TAG</Box>
            <Box>latest</Box>
          </Grid>
          <Grid item>
            <Box>IMAGE ID</Box>
            <Box>bde3020912ca</Box>
          </Grid>
          <Grid item>
            <Box>CREATED</Box>
            <Box>58 seconds ago</Box>
          </Grid>
          <Grid item>
            <Box>SIZE</Box>
            <Box>649MB</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
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
        A docker image file is immutable or you can also understand that as a read-only file.
        This ensures that every container running the same image will have the same environment.
        These images are snapshots of the application and it's environment at specific points in time.
        Docker images can potentially consist of a series of layers, each differing but also originating from the previous one.
        This allows us to build on top of images, in a layered architecture.
      </Typography>
      <br/>
      <Divider className={classes.divider} />
      <PythonDockerfile />
      <FrontendDockerfile />
      <DockerBuild />
      <DockerImageList />
      <DockerTag />
      {/*<DockerPush />*/}
    </Box>
  );
}