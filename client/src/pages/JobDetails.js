import React from 'react';
import { useParams } from 'react-router-dom';
import AllJobs from '../components/assets/AllJobs'; // Adjust this path if necessary
import '../pages/css/JobDetails.css'; // Import the CSS file

const JobDetails = () => {
  const { jobId } = useParams();
  const job = AllJobs.find(job => job.id === parseInt(jobId));

  if (!job) {
    return <div className="job-details">Job not found</div>;
  } 

  return (
    <div className='job-details'>
      <h2 className='job-title'>{job.jobTitle}</h2>
      <p><span className='side-heading'>Company:</span> {job.companyName}</p>
      <p><span className='side-heading'>Job Description:</span> {job.jobDescription}</p>
      <p><span className='side-heading'>Salary:</span> {job.jobSalary}</p>
      <p><span className='side-heading'>Requirements:</span> {job.requirements}</p>
      <p><span className='side-heading'>Qualifications:</span> {job.qualifications}</p>
      <p><span className='side-heading'>Place of Work:</span> {job.placeOfWork}</p>
    </div>
  );
};

export default JobDetails;
