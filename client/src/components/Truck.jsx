import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup'

export const Truck = (props) => {
  const { truck, onUpdateTruck } = props;
  console.log(truck)
  console.log("above from truck page")
  return (
    <div>
      <div className='truck-card'>
      <h3>Truck number: {truck.number}</h3>
      <h4>Truck driver: {truck.drivers}</h4>
      <h4>Notes: {truck.notes}</h4>  
    {/* <button onClick={()=>onUpdateTruck(truck.id)}>Update Truck</button> */}
      </div>
    
      {/* <JobList filteredJobs={trucks.jobs} /> */}
      {/* <ToolList filteredJobs={trucks.tools} /> */}
    </div>
  );
};

export default Truck;
//correct
//checked