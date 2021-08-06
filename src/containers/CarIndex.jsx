import React from 'react';
import Car from '../components/Car';
import { connect } from 'react-redux';
import { fetchCars } from '../actions/index';

class CarIndex extends React.Component {
  componentDidUpdate() {
    this.props.fetchCars(this.props.garage);
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
      <div className="col-md-9 bg-light shadow">
        {this.renderCarList()}
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
