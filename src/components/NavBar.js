import React from "react";
import { Link} from "react-router-dom";

function NavBar (){
    return(
    <nav> 
        <Link to="/">Home</Link>;
        <Link to= "/about">About Me</Link> ;
        <Link to="/education">My Education</Link>;
        <Link to= "/experience">My Work Experience</Link>
        <Link to="/projects">My Projects</Link>
        <Link to="/addproject">Add New Project</Link>
    </nav>
    )
}
export default NavBar;