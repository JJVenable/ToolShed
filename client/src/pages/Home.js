// imports up here
// import Tools from '../components/tools'
import React, {useState} from 'react'
import axios from 'axios'



function Home() {

  const [logForm, setLogForm] = useState({
    suggested_tools: '',
    address: '',
    scheduled: '',
    comments: '',
    job_number: ''
  })
  const handleSubmit =
    async (e) => {
      (e).preventDefault()
      setLogForm(logForm)
      const res = await axios.post('http://127.0.0.1:8000/jobs/', logForm);
      // console.log(res)
      // console.log(logForm)
      window.location.reload()
      // console.log("working")
    }
  


return (
  <div className="home-page">
    {/* <h3>This is home</h3> */}
    <h3>Put in a request/Add a task</h3>
      <form onSubmit={handleSubmit} className='formOne' >
        <input
          type="text-area"
          value={logForm.suggested_tools}
          onChange={(e) => {
            setLogForm({ ...logForm, suggested_tools: e.target.value })
          }}
          name={"suggested_tools"}
          placeholder={"Suggested Tools"}
        />
        <input
          type="text-area"
          value={logForm.address}
          onChange={(e) => {
            setLogForm({ ...logForm, address: e.target.value })
          }}
          name={"address"}
          placeholder={"Address"}
        />
        <input
          type="text-area"
          value={logForm.scheduled}
          onChange={(e) => {
            setLogForm({ ...logForm, scheduled: e.target.value })
          }}
          name={"scheduled"}
          placeholder={"Scheduled Date"}
        />
        <input
          type="text-area"
          value={logForm.comments}
          onChange={(e) => {
            setLogForm({ ...logForm, comments: e.target.value })
          }}
          name={"comments"}
          placeholder={"Comments"}
        />
        
        
        <button>Submit Request</button>
      </form>
  </div>
)
}
export default Home