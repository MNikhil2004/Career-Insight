// // import React from 'react';

// import React from 'react';
// import '../pages/css/About.css';

// const About = () => {
//   return (
//     <div className="about-page">
//       <header className="about-header">
//         <h1>About Interview Guide</h1>
//         <p>Your ultimate resource for interview preparation and job opportunities.</p>
//       </header>

//       <section className="about-section">
//         <h2>Our Mission</h2>
//         <p>
//           At Interview Guide, our mission is to empower job seekers with the knowledge and tools they need to succeed in their interviews. We strive to provide the most comprehensive and up-to-date collection of technical and non-technical interview questions from top companies, along with detailed job descriptions and opportunities.
//         </p>
//       </section>

    

//       <section className="about-section">
//         <h2>What We Offer</h2>
//         <ul>
//           <li><b>Technical and Non-Technical Questions:</b> A curated collection of interview questions from various companies, helping you prepare for any type of interview.</li>
//           <li><b>Latest Job Opportunities:</b> Detailed information about the latest job openings, including job descriptions, salaries, titles, roles, and places of work.</li>
//         </ul>
//       </section>

//       <section className="about-section">
//         <h2>Our Values</h2>
//         <ul>
//           <li>Integrity</li>
//           <li>Innovation</li>
//           <li>Customer Satisfaction</li>
//           <li>Community Engagement</li>
//         </ul>
//       </section>

//       <section className="about-section">
//         <h2>Contact Us</h2>
//         <p>Email: info@interviewguide.com</p>
//         <p>Phone: +123-456-7890</p>
//         <p>Address: Bachupally,Hyderabad</p>
//       </section>

//       <section className="about-section">
//         <h2>Follow Us</h2>
//         <p>Stay connected with us through social media.</p>
//         <div className="social-icons">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
//         </div>
//       </section>
//       <div>
//         <button className='btn btn-primary text-danger'>Rate Us</button>
//       </div>
//     </div>
//   );
// };

// export default About;
import React, { useState } from 'react';
import '../pages/css/About.css';
import RateUsModal from '../pages/RateUsModal';

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Interview Guide</h1>
        <p>Your ultimate resource for interview preparation and job opportunities.</p>
      </header>

      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          At Interview Guide, our mission is to empower job seekers with the knowledge and tools they need to succeed in their interviews. We strive to provide the most comprehensive and up-to-date collection of technical and non-technical interview questions from top companies, along with detailed job descriptions and opportunities.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li><b>Technical and Non-Technical Questions:</b> A curated collection of interview questions from various companies, helping you prepare for any type of interview.</li>
          <li><b>Latest Job Opportunities:</b> Detailed information about the latest job openings, including job descriptions, salaries, titles, roles, and places of work.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
          <li>Community Engagement</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <p>Email: info@interviewguide.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Address: Bachupally, Hyderabad</p>
      </section>

      <section className="about-section">
        <h2>Follow Us</h2>
        <p>Stay connected with us through social media.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
        </div>
      </section>
      <div>
        <button className='btn btn-primary text-warning' onClick={openModal}>Rate Us</button>
      </div>

      <RateUsModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default About;

