import React, { useEffect, useState } from "react";
import Job from "./Job";

export const JobList = (props) => {
  const { filteredJobs, onUpdateJob, onDeleteJob } = props;
  console.log(filteredJobs);
  return (
    <div>
      <h2>Active Jobs</h2>
      <div>
        {filteredJobs.map((j) => {
          return <Job job={j} key={j.id} onUpdateJob={onUpdateJob} onDeleteJob={onDeleteJob} />;
        })}
      </div>
    </div>
  );
};

export default JobList;
