import React from "react";
import {useHistory} from "react-router-dom"


function Home (){
  const history= useHistory() 
 function heandleClick(){
     history.push("/addreview")
 }
    return( 
    <div id="home" > 
        <h2 className="name"> Yeva Usatova</h2>
        <h2>Still a student but ready to work!</h2>
        <h3>If you wish to let me know a secret,
            just click on the button bellow... </h3>
        <button id="button" onClick={heandleClick} >I'll take you to reviews</button>    
       
    </div>
    )
}
export default Home;