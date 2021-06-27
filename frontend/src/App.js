import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './HomeContainer';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );

};

export default App;
