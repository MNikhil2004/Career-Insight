import React from 'react';
import { Link } from 'react-router-dom';
import AllCompanies from '../components/assets/AllCompanies';
import '../pages/css/Companies.css'; // Import the CSS file

const Latestjobs = () => {
  return (
    <div className='company'>
      <hr />
      <p>Know Previously Asked Questions Here</p>
      <hr />
      <div className='card-container'>
        {AllCompanies.map((item) => (
          <div className='card' key={item.id}>
            <img src={item.image} alt={item.name} className='card-image' />
            <div className='card-content'>
              <h2 className='card-title'>{item.name}</h2>
              <p className='card-text'><b>Role</b>: {item.role}</p>
            </div>
            <div className='card-footer'>
              <p className='card-salary'>Salary: ₹{item.salary}</p>
              <Link to={`/job-details/${item.id}`}><button><b>Know More</b></button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latestjobs;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import AllCompanies from '../components/assets/AllCompanies';
// import '../pages/css/Companies.css'; // Import the CSS file

// const Latestjobs = () => {
//   return (
//     <div className='company'>
//       <hr />
//       <p>Know Previously Asked Questions Here</p>
//       <hr />
//       <div className='card-container'>
//         {AllCompanies.map((item) => (
//           <div className='card' key={item.id}>
//             <img src={item.image} alt={item.name} className='card-image' />
//             <div className='card-content'>
//               <h2 className='card-title'>{item.name}</h2>
//               <p className='card-text'><b>Role</b>: {item.role}</p>
//             </div>
//             <div className='card-footer'>
//               <p className='card-salary'>Salary: ₹{item.salary}</p>
//               <Link to={`/job-details/${item.id}`}><button><b>Know More</b></button></Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Latestjobs;



// import React from 'react';
// import Item from '../components/item/Item'; 
// import AllCompanies from '../components/assets/AllCompanies.js';
// import '../pages/css/Companies.css'; // Import the CSS file

// const Latestjobs = () => {
//   return (
//     <div className='company'>
//       <hr/>
//       <p>Know Previously Asked Questions Here</p>
//       <hr/>
//       <div className='card-container'>
//         {AllCompanies.map((item) => (
//           <div className='card' key={item.id}>
//             <img src={item.image} alt={item.name} className='card-image' />
//             <div className='card-content'>
//               <h2 className='card-title'>{item.name}</h2>
//               <p className='card-text'><b>Role</b>: {item.role}</p>
//             </div>
//             <div className='card-footer'>
//               <p className='card-salary'>Salary: ₹{item.salary}</p>
//               <button><b>Know More</b></button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Latestjobs;
