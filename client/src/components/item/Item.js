import React from 'react'
import './Item.css'

const Item = ({ image, name, salary }) => {

  return (
    <div className='item'>
        <img src={image} alt={name}/>
        <p>{name}</p>
        <div className='item-salary'>
            Salary:{salary}₹ 
        </div>
        {/* <button onClick={handleClick}>Know More</button> */}
    </div>
  )
}

export default Item