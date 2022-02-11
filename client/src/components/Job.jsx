import React, { useEffect, useState } from 'react';

const state = {
  job: {},
  //function that makes the API call for PUT (passed down from App level),
  onUpdateJob: nameofcall(),
  //  onDeleteJob: //same as above,
  // onCreateJob: //same
};

export const Job = (props) => {
  const { job, onUpdateJob } = props;
  return (
    <div>
      <h1>{job.title}</h1>
      <h3>{job.description}</h3>
      <button onClick={console.log("I am updating stuff")}>Update</button>
    </div>
  );
};

export default Job;
