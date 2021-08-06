import React from 'react';
import { connect } from 'react-redux';
import { fetchCar } from '../actions/index';
import GarageDetail from './GarageDetail';
import Car from '../components/Car';

class CarShow extends React.Component {
  componentDidMount() {
    this.props.fetchCar(this.props.match.params.id)
  }

  render() {
    if (!this.props.car) {
      return <div>Loading...</div>
    }
    return (
      <div className="row my-5 h-100">
        <GarageDetail garage={this.props.garage} />
        <div className="col-md-9 bg-light shadow">
          <h3 className="text-center">Edit a Car in Your Garage</h3>
          <div className="card my-3 border-info">
            <div className="row g-0">
              <Car car={this.props.car} />
              <h6>{this.props.car.plate}</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    garage: state.garage,
    car: state.cars.find(el => el.id === parseInt(ownProps.match.params.id))
  }
}

export default connect(mapStateToProps, { fetchCar })(CarShow);
