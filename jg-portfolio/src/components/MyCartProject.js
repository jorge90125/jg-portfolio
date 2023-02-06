import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyCartProject = () => {
    return(
        <div>
            <h1>
                MyCart <a href='https://github.com/jorge90125/mycart-project' target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-github" /></a>
            </h1>
            <p>
                MyCart was the 2nd solo project for my software engineering immersive course at General assembly.
            <br/>
                MyCart is a MERN stack app that allows users to register, sign-in, sign-out, and gives full CRUD capabillities.
            <br/>
                Users can edit their cart items to indicate priority, availability, obtained status, price, category, and give them detailed descriptions.
            </p>
            <h3>
                Utilized Skills and Languages
            </h3>
            <ul>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Javascript</li>
                <li>CSS</li>
                <li>Node.js</li>
            </ul>
            <img src='mycart-ss.png' width='600'/>
        </div>
    )
}

export default MyCartProject