import React from 'react';

const About = () => {
  return (
    <div className='container my-5 py-5' id="about">
        <div className="row">
            <div className='col-md-5 mb-3'>
                <img className='img-fluid h-100' src="/images/img3.jpg" alt="robotic arm forming board" />
            </div>
            <div className='col-md-7 pt-5 position-relative px-5'>
                <p className='alert alert-primary position-absolute p-0 px-4 fw-bold top-0 rounded-pill'>About Us</p>

                <h3 className='fw-bold'>Electrospection's Mission and Goals</h3>
                <p className='small'>
                    At Electrospection we recognize the importance of printed circuit boards, being widely 
                    used in just about everything, and we value perfection. We aim to provide an 
                    accurate, cost-effective, and continuous defect detection software to PCB
                    manufacturers, and inspection equipment manufacturers alike. Powered by machine 
                    learning, we don't just stop at defects but we strive for process improvement.
                </p>
                <div className='row'>
                    <div className='col-6 col-sm-4 icon'>
                        <div className="icon-badge top-0 ms-3"></div>
                        <img className='img-fluid icon-color' src="/images/coding.png" alt="coding icon" width='60px'/>
                        <p className='fw-bold'>Accurate, Perfect Circuit Boards</p>
                    </div>
                    <div className='col-6 col-sm-4 icon'>
                        <div className="icon-badge top-0 ms-3"></div>
                        <img className='img-fluid icon-color' src="/images/computer.png" alt="computer icon" width='60px'/>
                        <p className='fw-bold'>Continous Process Improvement</p>
                    </div>
                    <div className='col-6 col-sm-4 icon'>
                        <div className="icon-badge top-0 ms-3"></div>
                        <img className='img-fluid icon-color' src="/images/graphic-design.png" alt="graphic designer icon" width='60px' />
                        <p className='fw-bold'>A centralized Data Solution</p>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-12 col-md-4 mb-3'>
                    <button className='btn btn-primary rounded-0 px-4 py-3 align-bottom'>Discover More</button>
                    </div>
                    <div className='col-12 col-md-8'>
                        <div className="row">
                            <div className="col-2">

                                    <img className='img-fluid icon-color' src="/images/phone-call.png" alt="phone icon" width='60px' />
                                
                            </div>
                            <div className='col-9'>
                                <p className='my-0 text-muted '>phone:</p>
                                <p className='fw-bolder'> +123-568-4758</p>
                            </div>

                        </div>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;