import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  imgWrapper: {
    marginBottom: theme.spacing(3),
    border: '1px solid black',
  },
  divider: {
    marginBottom: theme.spacing(3),
  },
  img: {
    maxWidth:'100%',
    maxHeight:'100%'
  },
  subtitle: {
    textAlign: 'center',
  }
}));

export default function DockerEngine() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h3">
        What is a Docker Engine?
      </Typography>
      <Divider className={classes.divider}/>
      <Box className={classes.imgWrapper}>
        <img
          className={classes.img}
          src="https://www.docker.com/sites/default/files/d8/styles/large/public/2018-11/Docker-Website-2018-Diagrams-071918-V5_a-Docker-Engine-page-first-panel.png?itok=TFiL1wtt"
        />
        <Typography className={classes.subtitle} variant="subtitle2">
          Image taken from - <a target="_blank" href="https://www.docker.com/products/container-runtime">https://www.docker.com/products/container-runtime</a>
        </Typography>
      </Box>
      <Typography variant="body1">
        Docker Engine is the industry’s de facto container runtime that runs on various Linux (CentOS, Debian, Fedora, Oracle Linux, RHEL, SUSE, and Ubuntu) and Windows Server operating systems. Docker creates simple tooling and a universal packaging approach that bundles up all application dependencies inside a container which is then run on Docker Engine. Docker Engine enables containerized applications to run anywhere consistently on any infrastructure, solving “dependency hell” for developers and operations teams, and eliminating the “it works on my laptop!” problem.
        - <a target="_blank" href="https://www.docker.com/products/container-runtime">Docker</a>
      </Typography>
    </Box>
  );
}