import React from "react";


function Reviews ({review, deleteFun}){
   
   
    function handleClick(id){
       fetch (`http://localhost:3000/reviews/${id}`,{
           method: "DELETE"
       })
       deleteFun(id)
    }
        
    const reviews = review.map ((note)=>        
    <h3 id="project" key={note.id}> 
     {note.name}
      <br/>
      {note.review}
      <br/>
      <button id="button" onClick={()=>handleClick(note.id)}>Dellete this comment</button>
      <br/>
      </h3>
    ) 
    
    return(
            
    <div id="bear">         
        {reviews}
        
    </div>
    )
}
export default Reviews;