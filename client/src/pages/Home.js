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
    
  })
  const handleSubmit =
    async (e) => {
      (e).preventDefault()
      setLogForm(logForm)
      const res = await axios.post('http://127.0.0.1:8000/jobs', logForm);
      console.log(res)
      console.log(logForm)
      window.location.reload()
      console.log("working")
    }
  


return (
  <div className="home-page">
    <h3>This is home</h3>
    <h3>OMG</h3>
    {/* <Tools /> */}
    {/* tools??? Probably change to trucks for real usage*/}
    {/* CREATE JOB FORM */}
    <div className="job-form">
          {/* IMPORT JOB FORM AS A COMPONENT */}
    </div>
  </div>
)
}
export default Home