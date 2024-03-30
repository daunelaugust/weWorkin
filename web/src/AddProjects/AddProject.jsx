import React, {useState} from 'react'
import "./AddProject.css"

export default function AddProject() {
  const[projName, setProjName] = useState('')
  const[projInfo, setProjInfo] = useState('')
  const[projType, setProjType] = useState('')
  const[projHours, setProjHours] = useState('')
  const[projLang, setProjLang] = useState('')
  const addURL = `https://5e39-173-220-39-122.ngrok-free.app/API/projects`
  // const[formData, setFormdata] = useState({
  //   projName,
  //   projinfo,
  //   language,
  //   hoursExp,
  //   type
  // })

    
  let handleAddProject = async (e) => {
    e.preventDefault(true)
    // let formData = {
    //   ...formData,
    //   e.target.id
    // }
    let formData = {
      projName,
      projInfo,
      projHours,
      projType,
      projLang
    }

    try{
      const response = await fetch (addURL, {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
console.log(response)
    }catch(error){console.log(error.message)}
    console.log(formData)
  }
  
  return (
    <div id='addProj'>
        <h1>Add Project Page</h1>
        <form id='addProjectForm' name="addProject">
            <input className='inputs' type='text' id='projectName' placeholder='project Name' value={projName} onChange={(e)=>{setProjName(prev => prev = e.target.value)}}/>
            <textarea className = 'inputs' rows='5' type='text' id='projectInfo' placeholder='project Description'value ={projInfo} onChange={(e)=>{setProjInfo(prev => prev = e.target.value )}}/>
            <input className='inputs' type='text' id='projectHours' placeholder='project Hours' value={projHours} onChange={(e)=>{setProjHours(prev => prev = e.target.value)}}/>
            <input className='inputs' type='text' id='projectType' placeholder='project Type' value={projType} onChange={(e)=>{setProjType(prev => prev = e.target.value)}}/>
            <input className='inputs' type='text' id='projectLang' placeholder='project Language' value={projLang} onChange={(e)=>{setProjLang(prev => prev = e.target.value)}}/>
            <input className='submit' type='submit' id='submitButton' onClick={handleAddProject}/>
        </form>
    </div>
  )
}