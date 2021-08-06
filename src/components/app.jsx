import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';
import CarIndex from '../containers/CarIndex';
// import CarShow from '../containers/CarShow';
// import CarEdit from '../containers/CarEdit';
// import CarDelete from '../containers/CarDelete';
import CarCreate from '../containers/CarCreate';
import GarageDetail from '../containers/GarageDetail';

const App = () => {
  return (
    <>
      <Router history={history}>
        <div className="container">
          <div className="row my-5 h-100">
            <GarageDetail />
            <Switch>
              <Route path='/' exact component={CarIndex} />
              <Route path='/cars/new' exact component={CarCreate} />
              {/* <Route path='/cars/edit/:id' exact component={CarEdit} />
              <Route path='/cars/delete' exact component={CarDelete} />
              <Route path='/cars/:id' exact component={CarShow} /> */}
            </Switch>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App;
