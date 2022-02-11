// imports up here
// import Tools from '../components/tools'
import React from 'react'
import axios from 'axios'

// const handleFormSubmit =
// async (e) => {
//   (e).preventDefault()
//   setLogForm(logForm)
//   const res = await axios.post('http://localhost:3001/api/tasks', logForm);
//   console.log(res)
//   console.log(logForm)
//   // window.location.reload()
//   console.log("working")
// }

function Home() {
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