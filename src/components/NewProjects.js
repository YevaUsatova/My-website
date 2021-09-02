import React, {useState} from "react"
import {useHistory} from "react-router-dom"


function NewProjects (){
    const [name, setName]= useState(" ")
    const [newCode, setNewCode]= useState(" ")
    const history= useHistory() 

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/projects", {
            method: "POST",
            headers: {"Content-Type": "Application/json", "Accepts": "Application/json" },
            body: JSON.stringify({name, code: newCode.split("\n")})
        })
        .then((r)=>r.json())
        .then((data)=>console.log(data))
        history.push("/projects")
    }

    function handleChange(event){
        setName(event.target.value)
    }

    function handleCodeChange(event){
        setNewCode(event.target.value)
    }

    return (
        <form onSubmit={handleSubmit}> 
            <input
            type="text" 
            onChange={handleChange}
            placeholder="Language name" 
            value={name}
            />
            <textarea
            onChange ={handleCodeChange}
            placeholder="Code goes here..."
            value={newCode}
            />
            <button >Add new project</button>
        </form>
    )
}
export default NewProjects;