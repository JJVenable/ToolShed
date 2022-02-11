import React, { useEffect, useState } from 'react';
import Tool from './Tool'

export const ToolList = (props) => {
  const { filteredTools, onUpdateTool } = props;
  console.log(filteredTools);
  return (
    <div>
      <h2>This is component Tool list </h2>
      <div>
        {filteredTools.map((t) => {
          return <Tool tool={t} key={t.id} onUpdateTool={onUpdateTool} />;
        })}
      </div>
    </div>
  );
};

export default ToolList;
