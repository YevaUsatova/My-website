import React from "react";
import { NavLink} from "react-router-dom";

function NavBar (){
    return(
    <nav className="navbar"> 
        <NavLink to="/" > Home </NavLink>
       
        <NavLink to= "/about"> About </NavLink> 
      
        <NavLink to="/education"> Education </NavLink>
    
        <NavLink to= "/experience"> Experience </NavLink>
       
        <NavLink to="/projects"> Projects </NavLink>
        
        <NavLink to="/addproject"> Add Project</NavLink>
    </nav>
    )
}
export default NavBar;