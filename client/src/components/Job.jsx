import React, { useEffect, useState } from 'react';
import axios from 'axios'

export const Job = (props) => {
  const { job, onUpdateJob, onDeleteJob } = props;
  // console.log(job)
  console.log("above from JOB page")
  const [form, setForm] = useState({
    comments:''
  })
  const handleSubmit =
  async (e) => {
    e.preventDefault()
    setForm(form)
    console.log(`update comment in ${job.id}`)
    console.log(form)
        const res = await axios.put(`http://127.0.0.1:8000/jobs/${job.id}`, form);
    // window.location.reload()
  }
  return (
    <div>
      <div className='Job-card'>
      <h2>Suggested Tools: {job.suggested_tools}</h2>
      <h3>Address: {job.address}</h3>
      <h3>Scheduled: {job.scheduled}</h3>  
      {/* <h3>Trucks: {job.truck}</h3> */}
      {/* / above , make a call and pull this in here with state*/}
      <h3>Comments: {job.comments}</h3>  
      {/* ---------------------------------------------------------------- */}

    
        <div className="popBox">
        
          {/* /////// form /////// */}
          <form onSubmit={handleSubmit} >
            <input
              type="text-area"
              value={form.comments}
              onChange={(e) => {
                setForm({ ...form, comments: e.target.value })
              }}
              name={"comments"}
              placeholder={"New Comment"}
            />
            <button onClick={()=>onUpdateJob(job.id)}>Update comment</button>
          </form>
          {/* ////// form /////// */}
        </div>
    
      {/* ---------------------------------------------------------------- */}
    {/* <button onClick={()=>onUpdateJob(job.id)}>Update Job</button> */}
    <button onClick={()=>onDeleteJob(job.id)}>Delete Job</button>

  
      </div>
    
    </div>
  );
};

export default Job;