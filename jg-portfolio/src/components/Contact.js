import React from 'react'

const Contact = () => {
    return(
        <div class="flex flex-col gap-5 text-blue2 m-4 mx-10 pb-10 text-3xl font-thin tracking-wide">
            <h1 class="text-blue5 text-4xl text-center font-mono uppercase tracking-widest">
                Contact me
            </h1>
            <p>
                Want to reach out and connect? Feel free to message or email me as well as adding me on LinkedIn or GitHub.
            </p>
            <p class="text-blue3">
                <span class="font-bold">Email: </span><a href='mailto:jorge.gonzalez7@g.austincc.edu' target='_blank' class="hover:font-normal hover:tracking-normal hover:text-blue5 hover:italic">jorge.gonzalez7@g.austincc.edu</a>
            </p>
            <p>
                <span class="font-bold">LinkedIn: </span><a href='https://www.linkedin.com/in/jorge-gonzalez-atx90125/' target='_blank' class="hover:font-normal hover:tracking-normal hover:text-blue5 hover:italic">Jorge's LinkedIn</a>
            </p>
            <p class="text-blue3">
                <span class="font-bold">GitHub: </span><a href='https://github.com/jorge90125' target='_blank' class="hover:font-normal hover:tracking-normal hover:text-blue5 hover:italic">Jorge's GitHub</a>
            </p>
        </div>
    )
}

export default Contact