import React from 'react'
import ToolList from '../components/ToolList'
import axios from 'axios'

function ToolsPage(props) {
  const { tools } = props
  //place logic for truck filtering right here (all tools currently)
  //add api call for create Tools

  //add api call for delete Tools (403 error)
  // const deleteTool = async (id) => {
  //   console.log(`you tried to delete tool${id}`)
  //   const res = await axios.delete(`http://127.0.0.1:8000/tools/${id}`);
  // }
  //add api call for put/update Tools
  const updateTool = (id) => {
    console.log(`tool ${id} updated!/ did something`)
    // const put whatever whatever
  }
return (
  <div className="tools-page">
    {/* <h3>This is ToolsPage</h3> */}
    <h3> These are the types of tools we have on trucks</h3>
    <h4><ToolList filteredTools={tools} onUpdateTool={updateTool} /></h4>
    {/* <h4><ToolList filteredTools={tools} onUpdateTool={deleteTool} /></h4> dont bring this back, it will map through again */}
    
  </div>
)
}
export default ToolsPage