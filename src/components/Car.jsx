import React from 'react';

const Car = ({ car }) => {
  return (
    <>
      <div className="col-md-3">
        <img src="logo192.png" alt="car" className="img-fluid rounded-start" />
      </div>
      <div className="col-md-9">
        <div className="card-body d-flex justify-content-evenly flex-column h-100">
          <h5 className="card-title">{car.brand}</h5>
          <h5 className="card-subtitle">{car.model}</h5>
          <p className="card-text">
            <strong>Owner: </strong>
            {car.owner}
          </p>
        </div>
      </div>
    </>
  )
}

export default Car;

