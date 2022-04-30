import React from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';
const FeatureCard = ({feature}) => {
  return (
    <div className="col-md-4 my-3 py-1">
      <div className='card border-0 shadow-sm mb-3 h-100 pb-3'>
        <div className='card-body px-3'>
          <div className='icon position-relative my-4'>
            <div className="icon-badge top-50 translate-middle-y ms-3"></div>
            <img className='img-fluid icon-color my-2' src={feature.image} alt="feature photography" width='55px'/>
          </div>
          <h4>{feature.title}</h4>
          <p>{feature.content}</p>
        </div>
        <div className="card-footer bg-transparent border-0 ">
          <button className='btn btn-primary border-2 rounded-0 align-bottom'>
            Read me <KeyboardArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard;