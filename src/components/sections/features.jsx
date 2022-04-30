import React from 'react';
import FeatureCard from '../featureCard';

const Features = () => {
  return (
    <div className='container-fluid my-5 bg-light' id="features">
      <div className='container  py-5'>
        <div className='text-center position-relative pt-5'>
          <p className='alert alert-primary position-absolute p-0 px-4 fw-bold top-0 start-50 translate-middle-x rounded-pill'>What we offer</p>

          <h2 className='fw-bolder mb-5'>Some of Our Powerful Features, Helping <br /> Manufacturers Unlock True Efficiency</h2>
        </div>
        <div className='row'>
            {features.map(feature=>{
              return <FeatureCard key={feature.id} feature={feature}/>
            })}
        </div>
      </div>

    </div>
  )
}

const features = [
  {
    id: 0,
    title: 'Accurate Defect Labels',
    content: 'Our software is intelligent enough to not only pick up on common defects on your circuit boards but it also categorizes and labels each defect, calculating the frequency of occurrence, the type of defect, and showing where the defect resides on the board itself,',
    image: '/images/security.png'
  },
  {
    id: 1,
    title: 'Key Insights',
    content: 'Smart suggestions constantly being delivered to employees to fix, reconfigure, and improve aspects of the printed circuit board manufacturing process. Our system will l let your know of possible root causes for key defects, useful assembly line tweaks and more.',
    image: '/images/cloud-computing.png'
  },
  {
    id: 2,
    title: 'Defect Forecasting',
    content: 'Faulty batches are costly, burdensome and slow down supply lines. Our A.I-powered forecasting uses your assembly line defect data to provide insights on future defect numbers to aid decision-making.',
    image: '/images/data-recovery.png'
  },
  
]

export default Features;