import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    
    return (
        <nav className="nav-main">


            <h2>Chuck Norris <span> jokes</span></h2>
            <img src="Images/chuck.png" alt="chuck"/>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/norris">Chuck Jokes</Link> </li>
                <li> <Link to="/jokes">Random Jokes </Link> </li>
            </ul>

        
            
            
        </nav>
    )
}

export default Nav
