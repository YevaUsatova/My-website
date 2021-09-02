import React, {useEffect, useState} from "react";
import NewProjects from "./NewProjects";

function Projects (){
    const[ project, setProject]= useState([])
     useEffect(()=>{
        fetch("http://localhost:3000/projects")
        .then((r)=> r.json())
        .then((data)=> {
            setProject(data)
        })  
    },[])   
    const projectsC = project.map((data)=> <li key= {data.id}>{data.name} {data.code.join('\n')} </li>)
  
    return(
        
    <div> 
        
        <ul>
             {projectsC}
        </ul>
        
        
    </div>
    )
}
export default Projects;