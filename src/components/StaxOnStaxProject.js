import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StaxOnStaxProject = () => {
    return(
        <div class="text-blue2 text-lg tracking-wide leading-relaxed">
            <h1 class="text-blue5 text-4xl text-center font-mono uppercase tracking-widest py-8">
                Stax On Stax
            </h1>
            <div class="ml-16 mb-10">
                <img class="float-right pt-6 mx-8 mb-8" src='./stax-on-stax-ss.png' width='600' alt='StaxOnStax'/>
                <p class="pt-6 mb-6 text-right">
                    Stax on Stax is the capstone project for my software engineering immersive course at General assembly. Stax on Stax is a full-stack React based app that allows users to keep track of their vinyl record collections. Users can regster, sign-in, sign-out, and the app utilizes user authentication to perform CRUD functions. Users can create, edit, delete, and not only view their collections, but the collections of any other user. The app also allows the user to filter their collections, ascending or descending, based on several fields.
                </p>
                <div class="flex flex-row justify-evenly">
                    <div class="flex text-6xl h-20 flex-col items-center hover:text-blue3">
                        <a class="hover:animate-bounce" href='https://github.com/jorge90125/stax-on-stax-frontend' target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" />
                        </a>
                        <h3 class="text-base">Frontend</h3>
                    </div>
                    <div class="flex text-6xl h-20 flex-col items-center hover:text-blue3">
                        <a class="hover:animate-bounce" href='https://github.com/jorge90125/stax-on-stax-backend' target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" />
                        </a>
                        <h3 class="text-base">Backend</h3>
                    </div>
                </div>
            </div>
            <h3 class="text-2xl mt-8 font-mono uppercase tracking-widest text-center text-blue5">
                Utilized Skills and Languages
            </h3>
            <div class="flex justify-left justify-evenly pb-10">
                <div>
                    <h4 class="text-lg underline text-blue5 font-mono uppercase tracking-widest">
                        Backend
                    </h4>
                    <ul class="list-disc list-inside leading-5">
                        <li>Python</li>
                        <li>Flask</li>
                        <li>Sql</li>
                        <li>Dotenv</li>
                        <li>Bcrypt</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg underline text-blue5 font-mono uppercase tracking-widest">
                        Frontend
                    </h4>
                    <ul class="list-disc list-inside leading-5">
                        <li>React</li>
                        <li>Javascript</li>
                        <li>CSS</li>
                        <li>Node.js</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StaxOnStaxProject