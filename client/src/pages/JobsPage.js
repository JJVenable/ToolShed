import React, { useEffect, useState } from 'react';
import axios from 'axios'
import JobList from '../components/JobList'

function JobsPage(props) {
  const { jobs } = props
  //job filtering loop
  //api call crud?
  const deleteJob = async (id) => {
      console.log(`you tried to delete job${id}`)
      const res = await axios.delete(`http://127.0.0.1:8000/jobs/${id}`);
    }

  const updateJob = (id) => {
    console.log(`job ${id} updated!`)
    //call it here?
  }
return (
  <div className="jobs-page">
    <h3>This is JobsPage</h3>
    <h4><JobList filteredJobs={jobs} onUpdateJob={updateJob}/></h4>
    
  </div>
)
}
export default JobsPage