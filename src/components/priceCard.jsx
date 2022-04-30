import React from 'react';
import {  Check } from '@mui/icons-material';

const PriceCard = ({price}) => {
  return (
    <div className='col-md-4 mb-3'>
        <div className='card h-100'>
            <div className="card-body">
                <div className='row my-4'>
                    <div className="col-4">
                        <div className="icon">
                            <div className="icon-badge ms-3 top-0 "></div>
                            <img className='img-fluid icon-color ' src={price.image} alt="price imaging" width='60px' />
                        </div>
                    </div>
                    <div className='col-8'>
                        <h2 className='fw-bolder mb-0'>{price.name}</h2>
                        <p className='text-primary fw-bolder fs-2'>${price.price}.00/ <span className='fs-5'>Month</span> </p>
                    </div>
                </div>
                    <hr />
                    <ul className='decor'>
                        {price.items.map((item, index)=>{
                            return <li key={index}> <Check className='text-primary my-3'/> {item}</li>
                        })}
                    </ul>
            </div>
            <div className="card-footer bg-transparent border-0 pb-3">
                <button className='btn btn-outline-primary border-2 rounded-0 align-bottom'>Discover More</button>
            </div>
        </div>
    </div>
  )
}

export default PriceCard;