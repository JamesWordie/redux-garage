import React from 'react';

const Car = ({ car }) => {
  return (
    <div className="card my-3 border-info">
      <div className="row g-0">
        <div className="col-md-3">
          <img src="logo192.png" alt="car" className="img-fluid rounded-start" />
        </div>
        <div className="col-md-9">
          <div className="card-body d-flex justify-content-evenly flex-column h-100">
            <h5 className="card-title">
              {car.brand}
              {car.model}
            </h5>
            <p className="card-text">
              <strong>Owner: </strong>
              {car.owner}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Car;

