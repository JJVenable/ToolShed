const state = {
  tool: {},
  //function that makes the API call for PUT (passed down from App level),
  onUpdateJob: nameofcall(),
  //  onDeleteJob: //same as above,
  // onCreateJob: //same
};

export const Tool = (props) => {
  const { tool, onUpdateTool } = props;
  return (
    <div>
      <h1>{tool.name}</h1>
      <h3>{tool.notes}</h3>
      <button onClick={console.log("I am updating stuff")}>Update</button>
    </div>
  );
};

export default Tool;