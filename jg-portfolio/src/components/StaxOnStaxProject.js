import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StaxOnStaxProject = () => {
    return(
        <div>
            <h1>
                Stax On Stax
            </h1>
            <div>
                <h3>Frontend -  </h3><h1><a href='https://github.com/jorge90125/stax-on-stax-frontend' target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-github" /></a></h1>
            </div>
            <div>
                <h3>Backend -  </h3><h1><a href='https://github.com/jorge90125/stax-on-stax-backend' target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-github" /></a></h1>
            </div>
            <p>
                Stax on Stax is the capstone project for my software engineering immersive course at General assembly.
            <br/>
                Stax on Stax is a full-stack React based app that allows users to keep track of their vinyl record collections.
            <br/>
                Users can regster, sign-in, sign-out, and the app utilizes user authentication to perform CRUD functions.
            <br/>
                Users can create, edit, delete, and not only view their collections, but the collections of any other user.
            <br/>
                The app also allows the user to filter their collections, ascending or descending, based on several fields.
            </p>
            <h3>
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
            <img src='stax-on-stax-ss.png' width='600'/>
        </div>
    )
}

export default StaxOnStaxProject