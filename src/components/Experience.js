import React, { useEffect, useState} from "react";

function Experience (){
    const [job, setJob]= useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/work")
        .then((r)=> r.json())
        .then((data)=> {
             setJob(data)       
        })
    },[])
    const listJobs= job.map((list)=> <li key={list.id}>{list.company} 
    {list.location} {list.position} {list.year} {list.duties} </li>)
    return (
    <div> 
        <ul>
            {listJobs}
        </ul>

    </div>
    )
}
export default Experience;