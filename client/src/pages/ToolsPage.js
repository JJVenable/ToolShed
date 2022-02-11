import React from 'react'
import ToolList from '../components/ToolList'

function ToolsPage(props) {
  const { tools } = props
  //place logic for truck filtering right here (all trucks currently)
  //add api call for update Trucks
  //add api call for delete Trucks
  //add api call for put/update Trucks
  const updateTool = (id) => {
    console.log(`tool ${id} updated!`)
    // const put whatever whatever
  }
return (
  <div className="tools-page">
    <h3>This is ToolsPage</h3>
    <h3> These are the types of tools we have on trucks</h3>
    <h4><ToolList filteredTools={tools} onUpdateTool={updateTool} /></h4>
    
  </div>
)
}
export default ToolsPage