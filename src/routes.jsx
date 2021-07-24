import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Command from './pages/Command';
import Image from './pages/Image';
import Container from './pages/Container';
import Network from './pages/Network';
import Volume from './pages/Volume';

function Routes() {
  return (
    <Switch>
      <Route exact path="/command" component={Command} />
      <Route exact path="/image" component={Image} />
      <Route exact path="/container" component={Container} />
      <Route exact path="/network" component={Network} />
      <Route exact path="/volume" component={Volume} />
      <Route path="/" component={Home} />
    </Switch>
  )
}
export default Routes;