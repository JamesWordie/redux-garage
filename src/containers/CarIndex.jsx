import React from 'react';
import Car from '../components/Car';
import { connect } from 'react-redux';
import { fetchCars } from '../actions/index';
import GarageDetail from './GarageDetail';
import { Link } from 'react-router-dom';

class CarIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCars();
  }

  renderAdminButton(car) {
    if (this.props.garage === car.garage) {
      return (
        <div className="btn-group align-self-center">
          {/* <Link to={`/cars/edit/${car.id}`} className="btn btn-outline-info">Edit</Link> */}
          <Link to={`/cars/${car.id}`} className="btn btn-outline-info">More Info</Link>
        </div>
      )
    }
  }

  renderCarList() {
    return this.props.cars.map(car => {
      return (
        <div className="card my-3 border-info" key={car.id}>
          <div className="row g-0">
            <Car car={car} />
            {this.renderAdminButton(car)}
          </div>
        </div>
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
