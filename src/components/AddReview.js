import React, {useState} from "react"
import {useHistory} from "react-router-dom";

function AddReview ({addnewReview }){
    const [state, setState]= useState({
        name :" ",
        review : " "
    })
        
    const history= useHistory() 
    function handleSubmit(e){
        e.preventDefault()
        addnewReview(state) 
        history.push("/reviews")
    }

    return (
        <form id="snake" onSubmit={handleSubmit}> 
            <label id="labels">My name is ... </label>
            <br/>
            <input id ="text"
                type="text" 
                onChange={(e)=>setState({...state, name : e.target.value})}
                value={state.name}
            />
            <br/>
            <label id="labels">My comment is...</label>
            <br/>
            <textarea id="text"
                onChange ={(e)=>setState({...state, review : e.target.value}) }
                value={state.review}
            />
            <br/>
            <button id="button" >Add new comment</button>
        </form>
    )
}
export default AddReview;