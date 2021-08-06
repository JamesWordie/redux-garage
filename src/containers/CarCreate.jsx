import React from 'react';
import { connect } from 'react-redux';
import CarForm from './CarForm';
// import CreateCar from '../actions/index';

class CarCreate extends React.Component {
  onSubmit = formValues => {
    this.props.CreateCar(formValues);
  }

  render() {
    return (
      <div className="col-md-9">
        <h3>Add New Car to Your Garage</h3>
        <CarForm onSubmit={this.onSubmit} />
      </div>
    )
  }
}

export default connect(null, {  })(CarCreate);
