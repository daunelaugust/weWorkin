import React from 'react'
import "./AddProject.css"

export default function addProject() {
  return (
    <div>
        <h1>Add Project Page</h1>
        <form name="addProject">
            <input type='text' id='projectName' placeholder='projectName'/>
            <input type='text' id='projectName' placeholder='projectDescription'/>
            <input type='submit' id='submitButton'/>
        </form>
    </div>
  )
}
