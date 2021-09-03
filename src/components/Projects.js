import React, {useEffect, useState} from "react";


function Projects (){
    const[ project, setProject]= useState([])
     useEffect(()=>{
        fetch("http://localhost:3000/projects")
        .then((r)=> r.json())
        .then((data)=> {
            setProject(data)
        })  
    },[])   
    const projectsC = project.map((data)=> <li id="project" key= {data.id}>Name of the language: {data.name} <br/> {data.code.join('\n')} </li>)
  
    return(
        
    <div> 
        
        <ul id="bear">
             {projectsC}
        </ul>
        
        
    </div>
    )
}
export default Projects;