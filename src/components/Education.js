import React, {useEffect, useState} from "react";

function Education ({school}){
    
const data= school.map((ed)=> <li id="school" key={ed.id}>
  Name of the School:{ed.name}
   <br/> 
   Progress: {ed.year} 
   <br/> 
   Faculty: {ed.faculty}
   <br/> 
   Degree: {ed.degree}
    </li>)
   
   return(
    <div>     
       <ul id="book">     
            {data}
        </ul>
    </div>
    )
}
export default Education;