import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { SecondaryContext } from '../../application/App';

const useStyles = makeStyles((theme) => ({
  clickable: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgb(50,205,50,0.5)',
    },
  },
}));


export default function Clickable(props) {
  const classes = useStyles();
  const { info, setInfo } = useContext(SecondaryContext);
  const onClick = () => info === props.id ? setInfo('') : setInfo(props.id);

  return (
    <Box
      className={`${classes.clickable} ${props.className}`}
      component={props.component}
      onClick={onClick}
    >
      {props.children}
    </Box>
  )
}