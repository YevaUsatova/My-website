import React, {useEffect, useState} from "react";

function Education (){
    const [school, setSchool]= useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/education")
        .then((r)=> r.json())
        .then((data)=> {
             setSchool(data)       
        })
    },[])
    const listOfSchools= school.map((list)=> <li id="school" key={list.id}>Name of the School: {list.name} <br/> 
    Progress: {list.year} <br/> Faculty: {list.faculty} <br/> Degree: {list.degree}</li>)
    return(
    <div> 
        <ul id="book">
            {listOfSchools}
        </ul>
    </div>
    )
}
export default Education;