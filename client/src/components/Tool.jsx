import React, { useEffect, useState } from 'react';

export const Tool = (props) => {
  const { tool, onUpdateTool } = props;
  console.log(tool)
  console.log("above from tool")
  return (
    <div>
      <div className='tool-card'>
      <h3>Name: {tool.name}</h3>
      <h4>Notes: {tool.notes}</h4> 
      {/* <h3>{tool.img}</h3>  */}
    {/* <button onClick={()=>onUpdateTool(tool.id)}>Update Tool</button> */}
    
      </div>
    
      {/* <JobList filteredJobs={trucks.jobs} /> */}
      {/* <ToolList filteredJobs={trucks.tools} /> */}
    </div>
  );
};

export default Tool;
