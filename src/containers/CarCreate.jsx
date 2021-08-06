import React from 'react';
import { connect } from 'react-redux';
import CarForm from './CarForm';
import { createCar } from '../actions/index';

class CarCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createCar(formValues);
  }

  render() {
    return (
      <div className="row my-5 h-100">
        <div className="col-md-9 bg-light shadow">
          <h3 className="text-center">Add New Car to Your Garage</h3>
          <CarForm onSubmit={this.onSubmit} />
        </div>
      </div>
    )
  }
}

export default connect(null, { createCar })(CarCreate);
