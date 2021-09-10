import React from "react";
import { NavLink} from "react-router-dom";

function NavBar (){
    return(
    <nav className="navbar"> 
    <ul>
        <li>
            <NavLink id="link" exact  activeClassName="active" to="/" > Home </NavLink>
        </li>
        <li>
            <NavLink id="link" activeClassName="active" to= "/about"> About </NavLink> 
        </li>
        <li>
            <NavLink id="link" activeClassName="active" to="/education"> Education </NavLink>
        </li>
        <li>   
            <NavLink id="link" activeClassName="active" to= "/experience"> Experience </NavLink>
        </li>
        <li>
            <NavLink id="link" activeClassName="active" to="/reviews"> Reviews </NavLink>
        </li>   
        <li>    
            <NavLink id="link" activeClassName="active" to="/addreview"> Add Review</NavLink>
        </li>
    </ul>
    </nav>
    )
}
export default NavBar;