const state = {
  filteredTools: [
    //this stuff comes in from the API
  ],
};

export const ToolList = (props) => {
  const { filteredTools, onUpdateJob } = props;
  return (
    <div>
      {filteredTools.map((t) => {
        return <Tool tools={t} />;
      })}
    </div>
  );
};

export default ToolList;
