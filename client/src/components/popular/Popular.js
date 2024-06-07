import React from 'react';
import Item from '../item/Item';
import Data from '../assets/Data.js';
import './Popular.css'
import { useNavigate } from 'react-router-dom';


const Popular = () => {
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate('/latestjobs')
  }
  return (
    <div className='popular'>
      <hr/>
      <h1>Latest Job Opportunities</h1>
      <hr/>
      <div className='popular-comp'>
        {Data.map((item) => (
          <Item key={item.id} name={item.name} image={item.image} salary={item.salary} role={item.role} />
        ))}
      </div>
      <button onClick={handleClick}>Know More</button>
    </div>
  );
};

export default Popular;
