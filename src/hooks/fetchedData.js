import React, {useEffect, useState} from "react"

function fetchedData (url){
    const [form, setForm]= useState([])
     const fetched = useEffect(()=>{
        fetch(url)
        .then((r)=> r.json())
        .then((data)=> setForm(data))
    },[])
    return(
        <Home data= {fetched} />
    )
}
export default fetchedData;