import React, { useEffect, useState } from 'react';

export const Tool = (props) => {
  const { tool, onUpdateTool } = props;
  console.log(tool)
  console.log("above from tool")
  return (
    <div>
      <div className='tool-card'>
      <h2>Name: {tool.name}</h2>
      <h3>Notes: {tool.notes}</h3> 
      <h3>{tool.img}</h3> 
    <button onClick={()=>onUpdateTool(tool.id)}>Update Tool</button>
    {/* <button onClick={()=>onDeleteTruck(truck.id)}>Delete Truck</button> */}
      </div>
    
      {/* <JobList filteredJobs={trucks.jobs} /> */}
      {/* <ToolList filteredJobs={trucks.tools} /> */}
    </div>
  );
};

export default Tool;
