import React, { useEffect, useState } from 'react';
import axios from 'axios'
import JobList from '../components/JobList'

function JobsPage(props) {

  const { jobs } = props
  //job filtering loop
  //api call crud?
  const deleteJob = async (id) => {
      console.log(`you deleted job${id}`)
      const res = await axios.delete(`http://127.0.0.1:8000/jobs/${id}`);
      window.location.reload()
    }

  const updateJob = (id) => {
    console.log(`job ${id} updated!`)
    //call it here?
    // const res = await axios.put(`http://127.0.0.1:8000/jobs/${id}`);
  }
return (
  <div className="jobs-page">
    <h3>Active Jobs</h3>
    <h4><JobList filteredJobs={jobs} onUpdateJob={updateJob} onDeleteJob={deleteJob}/></h4>
  </div>
)
}
export default JobsPage