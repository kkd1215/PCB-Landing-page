import React from "react";

const Header = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="container py-5">
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
                <a href="#about" className="nav-link text-light">About Us <span className="mx-1"> &darr; </span></a>
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid"
              style={{ height: "100%", width: "100%", objectFit: 'cover'}}
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
