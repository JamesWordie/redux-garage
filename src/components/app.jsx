import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as history }  from 'history';
import CarIndex from '../containers/CarIndex';
import GarageDetail from '../containers/GarageDetail';

const App = () => {
  return (
    <>
      <Router history={history}>
        <div className="container">
          <div className="row">
            <GarageDetail />
            <Switch>
              <Route path='/' exact component={CarIndex} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App;
