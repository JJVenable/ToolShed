import React, { useEffect, useState } from 'react';

const state = {
  filteredJobs: [
    //this stuff comes in from the API
    { ...job1 },
    { ...job2 },
  ],
  //function that makes the API call for PUT (passed down from App level),
  onUpdateJob: nameofcall(),
  //  onDeleteJob: //same as above,
  // onCreateJob: //same
};

export const JobList = (props) => {
  const { filteredJobs, onUpdateJob } = props;
  return (
    <div>
      {filteredJobs.map((j) => {
        return <Job job={j} />;
      })}
    </div>
  );
};

export default JobList;
