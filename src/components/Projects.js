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
    const projectsC = project.map((data)=> <li key= {data.c}>{data.c.join('\n')} </li>)
    const projectsP = project.map((data)=> <li key= {data.python}> {data.python.join('\n')}</li>)
    return(
        
    <div> 
        <NewProjects projects={setProject}/>
        <ul>
            C ++ Program {projectsC}
        </ul>
        <ul>
           Python Program {projectsP}
        </ul>
        
    </div>
    )
}
export default Projects;