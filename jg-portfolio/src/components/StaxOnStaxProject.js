import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StaxOnStaxProject = () => {
    return(
        <div class="text-blue2 text-lg tracking-wide px-10 leading-relaxed">
            <h1 class="text-blue5 text-4xl text-center font-mono uppercase tracking-widest py-8">
                Stax On Stax
            </h1>
            <div class="ml-36">
                <img class="float-right pt-6 ml-6 mb-8" src='stax-on-stax-ss.png' width='600'/>
                <p class="indent-10 pt-6">
                    Stax on Stax is the capstone project for my software engineering immersive course at General assembly. Stax on Stax is a full-stack React based app that allows users to keep track of their vinyl record collections. Users can regster, sign-in, sign-out, and the app utilizes user authentication to perform CRUD functions. Users can create, edit, delete, and not only view their collections, but the collections of any other user. The app also allows the user to filter their collections, ascending or descending, based on several fields.
                </p>
                <div class="flex gap-6 text-4xl h-20">
                    <h3>Frontend -  </h3>
                    <a class="hover:animate-bounce hover:text-5xl" href='https://github.com/jorge90125/stax-on-stax-frontend' target="_blank">
                        <FontAwesomeIcon icon="fa-brands fa-square-github" />
                    </a>
                </div>
                <div class="flex gap-6 text-4xl h-20 pt-4">
                    <h3>Backend -  </h3>
                    <a class="hover:animate-bounce hover:text-5xl" href='https://github.com/jorge90125/stax-on-stax-backend' target="_blank">
                        <FontAwesomeIcon icon="fa-brands fa-square-github" />
                    </a>
                </div>
                <h3 class="text-4xl my-8">
                    Utilized Skills and Languages
                </h3>
                <h4>
                    Backend
                </h4>
                <ul class="list-disc list-inside">
                    <li>Python</li>
                    <li>Flask</li>
                    <li>Sql</li>
                    <li>Dotenv</li>
                    <li>Bcrypt</li>
                </ul>
                <h4>
                    Frontend
                </h4>
                <ul class="list-disc list-inside">
                    <li>React</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </div>
    )
}

export default StaxOnStaxProject