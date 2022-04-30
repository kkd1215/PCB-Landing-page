import React from 'react';

const Header = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-8 hero d-flex header">
            <div>
              <p className="text-primary">
                A Comprehensive Printed Circuit Board Defect Solution
              </p>
              <h2 className="display-1 fw-bold">
                A.I. Enabled PCB <br /> Defect Detector
              </h2>
              <button className="btn btn-primary p-3 my-5 rounded-0">
                Learn More
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid w-100"
              src="images/img1.png"
              alt="circuit board"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
