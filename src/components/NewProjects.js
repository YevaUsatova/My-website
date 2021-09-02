import React, {useState} from "react"


function NewProjects ({projects}){
    const [form, setForm]= useState('')

    fetch("http://localhost:3002/projects", {
        method: "POST",
        headers: {"Content-Type": "Application/json", "Accepts": "Application/json" },
        body: JSON.stringify(form)
    })
    .then((r)=>r.json())
    .then((data)=>{setForm([...projects,data])})
    

    function handleSubmit(e){
        e.preventDefault()
    }
    function handleChange(event){
        setForm(event.target.value)
    }

    return (
        <form> 
            <input 
            type="text" 
            onChange={handleChange}
            placeholder="Code goes here..." 
            value={form}
            />
            <button onSubmit={handleSubmit}>Add new project</button>
        </form>
    )
}
export default NewProjects;