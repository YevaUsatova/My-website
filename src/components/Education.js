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
    const listOfSchools= school.map((list)=> <li key={list.id}>{list.name} 
    {list.year} {list.faculty} {list.degree}</li>)
    return(
    <div> 
        <ul>
            {listOfSchools}
        </ul>
    </div>
    )
}
export default Education;