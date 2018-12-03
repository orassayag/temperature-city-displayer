import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as containers from '../../containers';
import { Auxiliary } from '../../hoc';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={containers.TemperatureDisplayerContainer} />
        <Route path="*" exact component={containers.TemperatureDisplayerContainer} />
      </Switch>
    );

    return (
      <Auxiliary>
        {routes}
      </Auxiliary>
    );
  }
}

export default App;