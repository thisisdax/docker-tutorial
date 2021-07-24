import React, { useState, createContext }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Sidebar from './components/Sidebar';
import Secondary from './components/Secondary';
import Routes from '../routes';

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  main: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    width: '100%',
  },
}));

export const SecondaryContext = createContext(null)

function App() {
  const classes = useStyles();
  const [ info, setInfo ] = useState('')

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <SecondaryContext.Provider value={{ info, setInfo }}>
        <Sidebar drawerWidth={drawerWidth} />
        <main className={classes.main}>
          <Box className={classes.content}>
            <Container disableGutters>
              <Routes />
            </Container>
          </Box>
          <Secondary drawerWidth={drawerWidth} />
        </main>
      </SecondaryContext.Provider>
    </Box>
  );
}

export default App;