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

export default function Hypervisor() {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h3">
        What is a Hypervisor?
      </Typography>
      <Divider className={classes.divider}/>
      <Box className={classes.imgWrapper}>
        <img
          className={classes.img}
          src="https://www.dnsstuff.com/wp-content/uploads/2019/10/what-is-hypervisor-1024x536.jpg"
        />
        <Typography className={classes.subtitle} variant="subtitle2">
          Image taken from - <a target="_blank" href="https://www.dnsstuff.com/what-is-hypervisor">https://www.dnsstuff.com/what-is-hypervisor</a>
        </Typography>
      </Box>
      <Typography variant="body1">
        A hypervisor is a kind of emulator; it is computer software, firmware or hardware that creates and runs virtual machines. A computer on which a hypervisor runs one or more virtual machines is called a host machine, and each virtual machine is called a guest machine.
        - <a target="_blank" href="https://en.wikipedia.org/wiki/Hypervisor">Wikipedia</a>
      </Typography>
      <br/>
      <Typography variant="body1">
        There are two main hypervisor types, referred to as “Type 1” (or “bare metal”) and “Type 2” (or “hosted”). A type 1 hypervisor acts like a lightweight operating system and runs directly on the host’s hardware, while a type 2 hypervisor runs as a software layer on an operating system, like other computer programs.
        - <a target="_blank" href="https://www.vmware.com/topics/glossary/content/hypervisor#:~:text=There%20are%20two%20main%20hypervisor,system%2C%20like%20other%20computer%20programs.">VMware</a>
      </Typography>
      <br/>
      <Typography variant="body1">
        In our example, we are using Type 2 hypervisor which runs ontop of the Host OS.
      </Typography>
    </Box>
  );
}