import React, { useEffect, useState} from "react";

function Experience ({job}){
    
    const listJobs= job.map((list)=> <li id="school" key={list.id}>Company: {list.company} <br/>
    Location: {list.location} <br/> Position: {list.position} <br/> Year: {list.year} <br/> Duties: {list.duties} </li>)
    return (
    <div> 
        <ul id="job">
            {listJobs}
        </ul>

    </div>
    )
}
export default Experience;