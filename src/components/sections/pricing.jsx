import React from 'react';
import PriceCard from '../priceCard';

const Pricing = () => {
  return (
    <div className='container my-5 py-5' id="pricing">
        <div className="text-center position-relative pt-5">
            <p className='alert alert-primary position-absolute p-0 px-4 fw-bold top-0 start-50 translate-middle-x rounded-pill'>Subscription</p>
            <h3 className='fw-bolder fs-2 mb-5'>Our Pricing Plans</h3>
        </div>
        <div className='row'>
            <PriceCard price={pricings[0]}/>
            <div className='col-md-4 mb-3'>
                <div className="card h-100">
                    <div className="row g-0 h-100">
                        <div className="col-6 h-100 p-2">
                            <h2 className='text-primary fs-bolder'>Detectable Defects:</h2>
                            <p>Nick <br/> Metal Burrs <br/> Open Circuit <br/> Short Circuit <br/>
                                Copper Residue <br/>
                                Under Etch <br/>
                                Wrong Size Hole <br/>
                                Over Etch <br/>
                                Missing Conductor <br/>
                                Pinhole <br/>
                                Scratch <br/>
                                Break Out<br/>
                                Solder mask on pad <br/>
                                Dent <br/>  
                            </p>

                        </div>
                        <div className="col-6 h-100">
                            <img className='img-fluid h-100' src="/images/img2.jpg" alt="a mother chip showing commponents" />
                        </div>
                        <div>
                        </div>

                    </div>

                </div>
            </div>
            <PriceCard price={pricings[1]}/>
            
        </div>
    </div>
  )
}
const pricings = [
    {
        id: 0,
        name: 'Basic',
        price: 500,
        items: [
            '12 Detectable Defects',
            'Defect Statistics Data',
            'Defect Forecasts',
            'Accessible Customer Service via Phone',
        ],
        image: '/images/money.png'
    },
    {
        id: 1,
        name: 'Premium',
        price: 750,
        items: [
            '15 Detectable Defects',
            'Defect Statistics Data',
            'Defect Forecasts',
            'A.I-Generated Key Insights',
            'Accessible Customer Service via Phone',
            'Access to Customer Service via 24/7 Bot',
        ],
        image: '/images/best-price.png'

    },
]
export default Pricing;