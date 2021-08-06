import React from 'react';
import { Link } from 'react-router-dom';

const GarageDetail = ({ garage }) => {
  return (
    <div className="col-md-3 bg-light p-2 shadow">
      <div className="card h-100">
        {/* <img src="logo192.png" alt="" className="rounded-top" /> */}
        <div className="card-body mt-5 py-4 border">
          <h3 className="card-title text-center mb-3">{garage}</h3>
          <p className="card-text text-muted">This is my garage, a react app where you get car data from an API then using CRUD methods, with React Router, build out this app.</p>
          <Link to="/cars/new" className="btn btn-outline-info w-100 my-3" >
            Add a New Car
          </Link>
          <Link to="/" className="btn btn-outline-info w-100 my-3">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default GarageDetail;

// import React from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// class GarageDetail extends React.Component {
//   renderGarage = () => {
//     const { garage } = this.props;

//     return (
//       <div className="card h-100">
//         <img src="logo192.png" alt="" className="rounded-top" />
//         <div className="card-body mt-5 py-4 border">
//           <h3 className="card-title text-center mb-3">{garage}</h3>
//           <p className="card-text text-muted">This is my garage, a react app where you get car data from an API then using CRUD methods, with React Router, build out this app.</p>
//           <Link to="/cars/new" className="btn btn-outline-info w-100 my-3" >
//             Add a New Car
//           </Link>
//           <Link to="/">Home</Link>
//         </div>
//       </div>
//     )
//   }

//   render() {
//     return (
//       <div className="col-md-3 bg-light p-2 shadow">
//         {this.renderGarage()}
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return { garage: state.garage }
// }

// export default connect(mapStateToProps, {})(GarageDetail);
