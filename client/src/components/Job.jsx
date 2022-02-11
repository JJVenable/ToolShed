import React, { useEffect, useState } from 'react';
import JobsPage from '../pages/JobsPage';

export const Job = (props) => {
  const { job, onUpdateJob } = props;
  console.log(job)
  console.log("above from JOB page")
  return (
    <div>
      <div className='Job-card'>
      <h2>Suggested Tools: {job.suggested_tools}</h2>
      <h3>Address: {job.address}</h3>
      <h3>Scheduled: {job.scheduled}</h3>  
      {/* <h3>Trucks: {job.truck}</h3> */}
      <h3>Comments: {job.comments}</h3>  
    <button onClick={()=>onUpdateJob(job.id)}>Update Job</button>
    <button onClick={()=>onDeleteJob(job.id)}>Delete Job</button>

    {/* <button onClick={()=>onDeleteTruck(truck.id)}>Delete Truck</button> */}
      </div>
    
      {/* <JobList filteredJobs={trucks.jobs} /> */}
      {/* <ToolList filteredJobs={trucks.tools} /> */}
    </div>
  );
};

export default Job;