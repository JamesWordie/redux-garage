import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import CarIndex from '../containers/CarIndex';
// import CarShow from '../containers/CarShow';
// import CarEdit from '../containers/CarEdit';
// import CarDelete from '../containers/CarDelete';
import CarCreate from '../containers/CarCreate';

const App = () => {
  return (
    <div>
      <Router history={history}>
        <div className="container">
          <Switch>
            <Route path="/" exact component={CarIndex} />
            <Route path="/cars/new" exact component={CarCreate} />
            {/* <Route path='/cars/edit/:id' exact component={CarEdit} />
            <Route path='/cars/delete' exact component={CarDelete} />
            <Route path='/cars/:id' exact component={CarShow} /> */}
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App;
