import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Clickable from '../../components/Clickable/index'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 250,
    marginTop: '1rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '100%',
  },
  title: {
    textAlign: 'left',
  },
  body: {
    textAlign: 'left',
    marginTop: 30,
  },
  application: {
    backgroundColor: '#888888',
    color: 'white',
  },
  engine: {
    backgroundColor: '#0096FF',
    color: 'white',
  },
  hypervisor: {
    backgroundColor: '#FF69B4',
    color: 'white',
  },
  host: {
    backgroundColor: '#404040',
    color: 'white',
  }
}));

const VirtualMachines = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box>
        <Grid container justifyContent="space-around">
          <Grid container item xs={6} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Virtual Machines</Typography>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={12}>
                <Clickable className={classes.application}>
                  App A
                </Clickable>
              </Grid>
              <Grid item xs={12}>
                <Clickable className={classes.application}>
                  Bins/Libs
                </Clickable>
              </Grid>
              <Grid item xs={12}>
                <Clickable className={classes.application}>
                  Guest OS
                </Clickable>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid item xs={12}>
                <Clickable className={classes.application}>
                  App B
                </Clickable>
              </Grid>
              <Grid item xs={12}>
                <Clickable className={classes.application}>
                  Bins/Libs
                </Clickable>
              </Grid>
              <Grid item xs={12}>
                <Clickable className={classes.application}>
                  Guest OS
                </Clickable>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Clickable id="home-hypervisor" className={classes.hypervisor}>
                Hypervisor
              </Clickable>
            </Grid>
            <Grid item xs={12}>
              <Clickable id="home-host-os" className={classes.host}>
                Host OS
              </Clickable>
            </Grid>
            <Grid item xs={12}>
              <Clickable id="home-host-os" className={classes.host}>
                Server
              </Clickable>
            </Grid>
          </Grid>
          <Grid container alignContent="center" item xs={5} spacing={1}>
            <Grid item xs={12}>
              <Clickable id="home-hypervisor" className={classes.hypervisor}>
                Higher resource utilization
              </Clickable>
            </Grid>
            <Grid item xs={12}>
              <Clickable id="home-hypervisor" className={classes.hypervisor}>
                Higher disk space consumption
              </Clickable>
            </Grid>
            <Grid item xs={12}>
              <Clickable id="home-hypervisor" className={classes.hypervisor}>
                Slower boot up time
              </Clickable>
            </Grid>
          </Grid>
        </Grid>
        <Typography className={classes.body} variant="body2">
          VMs will be running on the Hypervisor which are running on top of a server and OS.
          Each VMs will have it's own OS inside it together with the application, libraries and dependencies.
          The overhead causes higher utilization of underlying resources as there are multiple virtual OS and kernals running.
          VMs also consumes higher disk space, as each VM is heavy and is usually GBs in size, whereas Docker containers are lightweight and usually only MBs in size.
          This allows Docker containers to boot up faster, usually in a matter of seconds, whereas VMs takes minutes to boot up due to having an OS.
          Because of that, Docker also has less isolation as more resources are shared between the containers like the Host OS, while VMs have complete isolation from each other.
        </Typography>
      </Box>
    </Paper>
  )
}

const Docker = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box>
        <Grid container justifyContent="space-around">
          <Grid container item xs={6} spacing={1}>
            <Grid item xs={12}>
              <Typography variant="subtitle1">Docker Containers</Typography>
            </Grid>
            <Grid item xs={6}>
              <Clickable className={classes.application}>
                <Grid item xs={12}>
                  App A
                </Grid>
                <Grid item xs={12}>
                  Bins
                </Grid>
                <Grid item xs={12}>
                  Libs
                </Grid>
              </Clickable>
            </Grid>
            <Grid item xs={6}>
              <Clickable className={classes.application}>
                <Grid item xs={12}>
                  App B
                </Grid>
                <Grid item xs={12}>
                  Bins
                </Grid>
                <Grid item xs={12}>
                  Libs
                </Grid>
              </Clickable>
            </Grid>
            <Grid item xs={12}>
              <Clickable id="home-docker-engine" className={classes.engine}>
                Docker Engine
              </Clickable>
            </Grid>
            <Grid item xs={12}>
              <Clickable id="home-host-os" className={classes.host}>
                Host OS
              </Clickable>
            </Grid>
            <Grid item xs={12}>
              <Clickable id="home-host-os" className={classes.host}>
                Server
              </Clickable>
            </Grid>
          </Grid>
          <Grid container alignContent="center" item xs={5} spacing={1}>
            <Grid item xs={12}>
              <Clickable id="home-docker-engine" className={classes.engine}>
                Lower resource utilization
              </Clickable>
            </Grid>
            <Grid item xs={12}>
              <Clickable id="home-docker-engine" className={classes.engine}>
                Lower disk space consumption
              </Clickable>
            </Grid>
            <Grid item xs={12}>
              <Clickable id="home-docker-engine" className={classes.engine}>
                Faster boot up time
              </Clickable>
            </Grid>
          </Grid>
        </Grid>
        <Typography className={classes.body} variant="body2">
          In Docker, we have the underlying server which will run any OS of your choice and finally Docker installed on the OS.
          Docker manages the containers which contains the application, libraries and dependencies.
          And the containers runs as an isolated process on the host operating system, sharing the OS kernal with other containers.
          Thus enabling resource isolation and allocation benefits of a VM but yet being much more portable and efficient.
        </Typography>
      </Box>
    </Paper>
  );
}

export default function Home() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h1" noWrap>
        Learning Docker
      </Typography>
      <br/>
      <Typography variant="body1">
        Learning Docker is a curated list of information that I personally felt most helpful when learning about Docker.
        This information is targeted for complete beginners and may also be helpful for intermediate developers who wishes to refresh their knowledge on Docker.
      </Typography>
      <br/>
      <Divider/>
      <br/>
      <Typography variant="h4" noWrap>
        Introduction to Docker
      </Typography>
      <br/>
      <Typography variant="body1">
        Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.
        Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.

        Some of us may be familiar with VMs(Virtual Machines) and may realise by now that docker containers are quite similar to VMs.
        If we take a look at the comparison between both technologies, we will come to realise that containers are much more lightweight, portable and efficient.
      </Typography>
      <Grid
        container
        className={classes.root}
        justifyContent="center"
        spacing={2}
      >
        <Grid item xs={6}>
          <VirtualMachines />
        </Grid>
        <Grid item xs={6}>
          <Docker />
        </Grid>
      </Grid>
    </Box>
  )
}