const state = {
  truck: {},
  //function that makes the API call for PUT (passed down from App level),
  onUpdateTruck: nameofcall(),
  //  onDeleteTruck: //same as above,
  // onCreateTruck: //same
};

export const Truck = (props) => {
  const { truck, onUpdateTruck } = props;
  return (
    <div>
      <h1>{truck.number}</h1>
      <h3>{truck.drivers}</h3>
      <h3>{truck.notes}</h3>
      {/* <JobList filteredJobs={truck.jobs} /> */}
      {/* <ToolList filteredJobs={truck.tools} /> */}
    </div>
  );
};

export default Truck;
//correct
//checked