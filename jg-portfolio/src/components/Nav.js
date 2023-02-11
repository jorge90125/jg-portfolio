import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div class="flex border-b-4 border-blue1">
            <h1 class="text-blue5 bg-blue2 py-2 text-3xl text-center font-mono w-4/12 uppercase">Jorge Gonzalez</h1>
            <nav class="flex flex-row place-content-around items-center text-xl bg-blue2 py-1 font-mono w-full uppercase">
                <NavLink to='/'>About Me</NavLink>
                <div class="flex flex-col">
                    <button onClick={() => setIsOpen((prev) => !prev)} class="uppercase">Projects
                        {!isOpen ? (
                            <FontAwesomeIcon icon="fa-angle-down" />
                        ): (
                            <FontAwesomeIcon icon="fa-angle-up" />
                        )}
                    </button>
                    {isOpen && (
                        <div class="absolute text-base mt-10 flex flex-col bg-blue5 gap-2 p-2 rounded-b-lg border-2 border-t-0 border-blue1">
                            <NavLink to='/staxonstax' onClick={() => setIsOpen((prev) => !prev)}>Stax On Stax</NavLink>
                            <NavLink to='/streamin' onClick={() => setIsOpen((prev) => !prev)}>Streamin</NavLink>
                            <NavLink to='/mycart' onClick={() => setIsOpen((prev) => !prev)}>MyCart</NavLink>
                            <NavLink to='/beatthebully' onClick={() => setIsOpen((prev) => !prev)}>Beat The Bully</NavLink>
                            <NavLink to='/portfolio' onClick={() => setIsOpen((prev) => !prev)}>Portfolio</NavLink>
                        </div>
                    )}
                </div>
                {/* <details class="flex flex-col">
                    <summary>PROJECTS</summary>
                    <NavLink to='/staxonstax'>Stax On Stax</NavLink>
                    <NavLink to='/streamin'>Streamin</NavLink>
                    <NavLink to='/mycart'>MyCart</NavLink>
                    <NavLink to='/beatthebully'>Beat The Bully</NavLink>
                    <NavLink to='/portfolio'>Portfolio</NavLink>
                </details> */}
                <NavLink to='/resume'>Resume</NavLink>
                <NavLink to='/contact'>Contact Me</NavLink>
            </nav>
        </div>
    )
}

export default Nav