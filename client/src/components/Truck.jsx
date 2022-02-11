import React, { useEffect, useState } from 'react';

export const Truck = (props) => {
  const { truck, onUpdateTruck } = props;
  console.log(truck)
  console.log("above from truck page")
  return (
    <div>
      <div className='truck-card'>
      <h2>Truck number: {truck.number}</h2>
      <h3>Truck driver: {truck.drivers}</h3>
      <h3>Notes: {truck.notes}</h3>  
    <button onClick={()=>onUpdateTruck(truck.id)}>Update Truck</button>
      </div>
    
      {/* <JobList filteredJobs={trucks.jobs} /> */}
      {/* <ToolList filteredJobs={trucks.tools} /> */}
    </div>
  );
};

export default Truck;
//correct
//checked