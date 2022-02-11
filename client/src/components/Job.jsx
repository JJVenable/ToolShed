import React, { useEffect, useState } from 'react';

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
      <h3>Comments: {job.comments}</h3>  
    <button onClick={()=>onUpdateJob(job.id)}>Update Job</button>
    {/* <button onClick={()=>onDeleteTruck(truck.id)}>Delete Truck</button> */}
      </div>
    
      {/* <JobList filteredJobs={trucks.jobs} /> */}
      {/* <ToolList filteredJobs={trucks.tools} /> */}
    </div>
  );
};

export default Job;



// export const Job = (props) {
//   job: {},
//   //function that makes the API call for PUT (passed down from App level),
//   onUpdateJob: nameofcall(),
//   //  onDeleteJob: //same as above,
//   // onCreateJob: //same
// };

// export const Job = (props) => {
//   const { job, onUpdateJob } = props;
//   return (
//     <div>
//       <h1>{job.title}</h1>
//       <h3>{job.description}</h3>
//       <button onClick={console.log("I am updating stuff")}>Update</button>
//     </div>
//   );
// };

// export default Job;
