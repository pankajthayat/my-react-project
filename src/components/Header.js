import React from "react";
import {NavLink} from "react-router-dom";
const Header=()=>(
    <header>
    <h1>Expensify</h1>
     <NavLink to="/" activeClassName="active-class" exact={true}>Go Home</NavLink>{/* link works for internal links only... if we want outsie ex:google.com  we can use link or <a>. can use any of them*/}
     <NavLink to='/create' activeClassName="active-class"> create</NavLink>
     <NavLink to="/edit" activeClassName="active-class">Edit</NavLink>
     <NavLink to="/help" activeClassName="active-class">help</NavLink>   
    </header>
)

export default Header;