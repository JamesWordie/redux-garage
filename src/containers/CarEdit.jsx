import React from 'react';
import { connect } from 'react-redux';
import CarForm from './CarForm';
import { editCar, fetchCar } from '../actions/index';
import GarageDetail from './GarageDetail';

class CarEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCar(this.props.match.params.id)
  }

  onSubmit = formValues => {
    this.props.editCar(formValues);
  }

  render() {
    return (
      <div className="row my-5 h-100">
        <GarageDetail garage={this.props.garage} />
        <div className="col-md-9 bg-light shadow">
          <h3 className="text-center">Edit a Car in Your Garage</h3>
          <CarForm onSubmit={this.onSubmit} initialValues={this.props.car} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    garage: state.garage,
    car: state.cars[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { editCar, fetchCar })(CarEdit);
