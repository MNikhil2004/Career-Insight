import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './Newly.css';
import amazon3 from '../assets/amazon3.jpeg';
import flipcart from '../assets/flipkart.jpeg';

const Newly = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate('/companies'); // Navigate to the Companies page
  };

  return (
    <div className='newly'>
      <div className='newlyadded-left'>
        <h2>New questions added</h2>
        <button onClick={handleClick}>Click Here</button> {/* Add the onClick handler */}
      </div>
      <div className='newlyadded-right'>
        <h2>Companies</h2>
        <img src={amazon3} alt='' />
        <img src={flipcart} alt='' />
      </div>
    </div>
  );
}

export default Newly;
