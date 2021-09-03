import React,  { useEffect, useState} from "react";

function About (){
    const[ data, setData]= useState('')
     useEffect(()=>{
        fetch("http://localhost:3000/about")
        .then((r)=> r.json())
        .then((data)=> {
             setData(data.map((text)=> 
              text.text
            ) )       
        })
    },[])
    return(
        <div id="about">
            <p> {data}</p>
        </div>
    
    )
}
export default About;