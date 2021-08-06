import React from 'react';
import Car from '../components/Car';
import { connect } from 'react-redux';
import { fetchCars } from '../actions/index';
import GarageDetail from './GarageDetail';

class CarIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  renderCarList = () => {
    return this.props.cars.map(car => {
      return (
        <Car car={car} key={car.id} />
      )
    })
  }

  render() {
    return (
      <div className="row my-5 h-100">
        <GarageDetail garage={this.props.garage} />
        <div className="col-md-9 bg-light shadow">
          {this.renderCarList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars,
    garage: state.garage
  }
}

export default connect(mapStateToProps, { fetchCars })(CarIndex);
