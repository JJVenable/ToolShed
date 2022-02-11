import React, { useEffect, useState } from 'react';

export const Truck = (props) => {
  const { trucks } = props;
  console.log(trucks)
  console.log("above from truck page")
  return (
    <div>
      <div class='truck-card'>
      <h2>Truck number: {trucks.number}</h2>
      <h3>Truck driver: {trucks.drivers}</h3>
      <h3>Notes: {trucks.notes}</h3> 
      <button>Delete Truck</button>
      </div>
    
      {/* <JobList filteredJobs={trucks.jobs} /> */}
      {/* <ToolList filteredJobs={trucks.tools} /> */}
    </div>
  );
};

export default Truck;
//correct
//checked