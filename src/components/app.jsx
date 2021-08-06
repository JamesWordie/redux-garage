import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import CarIndex from '../containers/CarIndex';
import CarCreate from '../containers/CarCreate';
import CarEdit from '../containers/CarEdit';
import CarShow from '../containers/CarShow';
// import CarDelete from '../containers/CarDelete';
import history from '../history';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="container">
          <Switch>
            <Route path="/" exact component={CarIndex} />
            <Route path="/cars/new" exact component={CarCreate} />
            <Route path='/cars/edit/:id' exact component={CarEdit} />
            {/* <Route path='/cars/delete' exact component={CarDelete} /> */}
            <Route path='/cars/:id' exact component={CarShow} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
