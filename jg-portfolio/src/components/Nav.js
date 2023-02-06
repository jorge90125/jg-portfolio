import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return(
        <div>
            <div>
                <h1 class="text-blue-600">Jorge Gonzalez</h1>
            </div>
            <nav>
                <NavLink to='/'>ABOUT ME</NavLink>
                <details>
                    <summary>PROJECTS</summary>
                    <NavLink to='/staxonstax'>Stax On Stax</NavLink>
                    <NavLink to='/streamin'>Streamin</NavLink>
                    <NavLink to='/mycart'>MyCart</NavLink>
                    <NavLink to='/beatthebully'>Beat The Bully</NavLink>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                </details>
                <NavLink to='/resume'>RESUME</NavLink>
                <NavLink to='/contact'>CONTACT ME</NavLink>
            </nav>
        </div>
    )
}

export default Nav