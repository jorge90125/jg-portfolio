import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    return(
        <div class="flex flex-col gap-5 text-blue2 m-4 mx-10 pb-10 text-2xl tracking-wide">
            <h1 class="text-blue5 text-4xl text-center font-mono uppercase tracking-widest pt-4">
                Contact Me
            </h1>
            <p class="mx-40 leading-relaxed">
                Want to reach out and connect? Feel free to message or email me as well as adding me on LinkedIn or GitHub.
            </p>
            <div class="flex flex-row text-5xl justify-evenly">
                <a href='mailto:jorge.gonzalez7@g.austincc.edu'target="_blank">
                    <div class="flex flex-col items-center justify-center gap-6 p-10 border-blue2 border-8 rounded-3xl hover:bg-blue4 hover:text-blue1 hover:font-bold w-72 h-60 hover:text-6xl">
                        <p>Email</p>
                        <FontAwesomeIcon icon="fa-regular fa-envelope" />
                    </div>
                </a>
                <a href='https://www.linkedin.com/in/jorge-gonzalez-atx90125/' target="_blank">
                    <div class="flex flex-col items-center justify-center gap-6 p-10 border-blue2 border-8 rounded-3xl hover:bg-blue4 hover:text-blue1 hover:font-bold w-72 h-60 hover:text-6xl">
                        <p>LinkedIn</p>
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </div>
                </a>
                <a href='https://github.com/jorge90125' target="_blank">
                    <div class="flex flex-col items-center justify-center gap-6 p-10 border-blue2 border-8 rounded-3xl hover:bg-blue4 hover:text-blue1 hover:font-bold w-72 h-60 hover:text-6xl">
                        <p>GitHub</p>
                        <FontAwesomeIcon icon="fa-brands fa-square-github" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact