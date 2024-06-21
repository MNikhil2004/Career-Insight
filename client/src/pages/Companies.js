import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllCompanies from '../components/assets/AllCompanies';
import './css/Companies.css';

const Companies = () => {
  const navigate = useNavigate();

  const handleButtonClick = (companyId) => { 
    navigate(`/questions/${companyId}`);
  };

  return (
    <div className='company'>
      <hr/>
      <p>Know Previously Asked Questions Here</p>
      <hr/>
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
              <button onClick={() => handleButtonClick(item.id)}><b>Click Here</b></button>
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default Companies;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import AllCompanies from '../components/assets/AllCompanies';
// import '../pages/css/Companies.css';

// const Companies = () => {
//   const navigate = useNavigate();

//   const handleButtonClick = (companyId) => {
//     navigate(`/questions/${companyId}`);
//   };

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
//               <button onClick={() => handleButtonClick(item.id)}><b>Click Here</b></button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Companies;


// // import React from 'react';
// // import Item from '../components/item/Item';
// // import AllCompanies from '../components/assets/AllCompanies';
// // import '../pages/css/Companies.css'

// // const Companies = () => {
// //   return (
// //     <div className='company'>
// //       <hr/>
// //       <p>Know Previously Asked Questions Here</p>
// //       <hr/>
// //       <div className='card-container'>
// //         {AllCompanies.map((item) => (
// //           <div className='card' key={item.id}>
// //             <img src={item.image} alt={item.name} className='card-image' />
// //             <div className='card-content'>
// //               <h2 className='card-title'>{item.name}</h2>
// //               <p className='card-text'><b>Role</b>:{item.role}</p>
// //             </div>
// //             <div className='card-footer'>
// //               <p className='card-salary'>Salary:₹{item.salary}</p>
// //               <button><b>Click Here</b></button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Companies;