import React, { useEffect, useState } from "react";
import Job from "./Job";

export const JobList = (props) => {
  const { filteredJobs, onUpdateJob } = props;
  console.log(filteredJobs);
  return (
    <div>
      <h2>This is component JobList</h2>
      <div>
        {filteredJobs.map((j) => {
          return <Job job={j} key={j.id} onUpdateJob={onUpdateJob} />;
        })}
      </div>
    </div>
  );
};

export default JobList;
