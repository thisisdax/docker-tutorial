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

const DockerRun = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Clickable
        id="image-docker-run-cmd"
        component="span"
        className={classes.tab}
      >
        >> docker run docker-tutorial
      </Clickable>
      <Box className={classes.console}>
        > learning-docker@0.1.0 start <br/>
        > react-scripts start <br/>
      </Box>
      <Clickable
        style={{ marginLeft: 0 }}
        className={classes.console}
      >
        ℹ ｢wds｣: Project is running at http://172.17.0.2/ <br/>
      </Clickable>
      <Box className={classes.console}>
        ℹ ｢wds｣: webpack output is served from <br/>
        ℹ ｢wds｣: Content not from webpack is served from /frontend/public <br/>
        ℹ ｢wds｣: 404s will fallback to / <br/>
        Starting the development server... <br/>
      </Box>
    </Box>
  )
}

const DockerPS = () => {
  const classes = useStyles();
  return (
    <Box className={classes.marginBottom}>
      <Popover
        id="image-docker-image-list"
        className={classes.tab}
        content={<Typography>"docker ps" is the equivalent of "docker container ls" which list all of your current running containers</Typography>}
      >
        <Clickable
          component="span"
          className={classes.tab}
        >
          >> docker ps
        </Clickable>
      </Popover>
      <Box className={classes.console}>
        <Grid container justifyContent="flex-start" spacing={4}>
          <Grid item>
            <Box>CONTAINER ID</Box>
            <Box>d86b80b9b931</Box>
          </Grid>
          <Grid item>
            <Box>IMAGE</Box>
            <Box>docker-tutorial</Box>
          </Grid>
          <Grid item>
            <Box>COMMAND</Box>
            <Box>"docker-entrypoint.s…"</Box>
          </Grid>
          <Grid item>
            <Box>CREATED</Box>
            <Box>23 seconds ago</Box>
          </Grid>
          <Grid item>
            <Box>STATUS</Box>
            <Box>Up 22 seconds</Box>
          </Grid>
          <Grid item>
            <Box>PORTS</Box>
            <Box> </Box>
          </Grid>
          <Grid item>
            <Box>NAMES</Box>
            <Box>angry_turing</Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default function Container() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h1" noWrap>
        Docker Container
      </Typography>
      <br/>
      <Typography variant="body1">
        Docker Containers are virtualized run-time environments where users can isolate applications from the underlying host system.
        These containers are compact and portal allowing us to start up an application quickly and easily.
        Every container running on the same image will have an identical run-time environment.
        This solves the problem of an application working on one system and not on another, and further simplifies collaboration between developers.
      </Typography>
      <br/>
      <Typography>
        Previously, we mentioned that images are immutable. When we run a container,
        docker will create a writable layer on top of the immutable image, which allows
        modifications of the entire copy of the image file. We must be clear that this copy
        of the image file we are modifying in the container itself is different from the
        original copy of the image file you built the container upon.
      </Typography>
      <br/>
      <Divider className={classes.divider} />
      <DockerRun />
      <DockerPS />
      {/*<DockerPush />*/}
    </Box>
  );
}