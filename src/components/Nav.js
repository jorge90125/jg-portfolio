import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div class="flex border-b-8 border-blue5">
            <h1 class="text-blue5 bg-blue2 py-2 text-4xl text-center font-mono w-4/12 uppercase tracking-wide">Jorge Gonzalez</h1>
            <nav class="flex flex-row place-content-around items-center text-base bg-blue2 py-1 font-light w-full uppercase tracking-widest">
                <Link to='/' class="hover:bg-blue1 hover:text-blue5 p-2 rounded-md font-bold">About Me</Link>
                <div class="flex flex-col">
                    <button onClick={() => setIsOpen((prev) => !prev)} class="uppercase hover:bg-blue1 hover:text-blue5 p-2 rounded-md  tracking-widest font-bold">Projects
                        {!isOpen ? (
                            <FontAwesomeIcon icon="fa-angle-down" />
                        ): (
                            <FontAwesomeIcon icon="fa-angle-up" />
                        )}
                    </button>
                    {isOpen && (
                        <div class="absolute text-base mt-10 flex flex-col bg-blue5 gap-2 p-2 rounded-b-lg border-2 border-t-0 border-blue1">
                            <Link to='/staxonstax' onClick={() => setIsOpen((prev) => !prev)} class="hover:bg-blue1 hover:text-blue5 p-px rounded-md">Stax On Stax</Link>
                            <Link to='/streamin' onClick={() => setIsOpen((prev) => !prev)} class="hover:bg-blue1 hover:text-blue5 p-px rounded-md">Streamin</Link>
                            <Link to='/mycart' onClick={() => setIsOpen((prev) => !prev)} class="hover:bg-blue1 hover:text-blue5 p-px rounded-md">MyCart</Link>
                            <Link to='/beatthebully' onClick={() => setIsOpen((prev) => !prev)} class="hover:bg-blue1 hover:text-blue5 p-px rounded-md">Beat The Bully</Link>
                            <Link to='/portfolio' onClick={() => setIsOpen((prev) => !prev)} class="hover:bg-blue1 hover:text-blue5 p-px rounded-md">Portfolio</Link>
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
                <Link to='/resume' class="hover:bg-blue1 hover:text-blue5 p-2 rounded-md font-bold">Resume</Link>
                <Link to='/contact' class="hover:bg-blue1 hover:text-blue5 p-2 rounded-md font-bold">Contact Me</Link>
            </nav>
        </div>
    )
}

export default Nav