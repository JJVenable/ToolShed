const state = {
  filteredTools: [
    //this stuff comes in from the API
  ],
};

export const ToolList = (props) => {
  const { filteredTools, onUpdateTool } = props;
  return (
    <div>
      {filteredTools.map((t) => {
        return <Tool tools={t} />;
      })}
    </div>
  );
};

export default ToolList;
