import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StreaminProject = () => {
    return(
        <div>
            <h1>
                Streamin
            </h1>
            <div>
                <h3>Frontend -  </h3><h1><a href='https://github.com/Bernard-Calma/streamin-frontend' target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-github" /></a></h1>
            </div>
            <div>
                <h3>Backend -  </h3><h1><a href='https://github.com/Bernard-Calma/streamin-backend' target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-github" /></a></h1>
            </div>
            <p>
                Streamin is the group project for for my software engineering immersive course at General assembly.
            <br/>
                It was a full-stack MERN app collaboration between myself, Bernard Calma, and Rousse Bidon.
            <br/>
                Streamin uses user authentication to allow users to post embeded videos from most popular streaming platform with full CRUD capabillities.
            <br/>
                Users can also like videos that other users have posted. As well as comment on their own and eachothers' videos and like said comments.
            <br/>
                The app also allows the user to search the database of all videos based on the titles of the uploaded videos.
            <br/>
                My main responsibilities were to work on user verification, the register route, the comment function, the like function, as well as some miscellaneous frontend work.
            </p>
            <h3>
                Utilized Skills and Languages
            </h3>
            <h4>
                Backend
            </h4>
            <ul>
                <li>MongoDB</li>
                <li>Express.js</li>
                <li>Node.js</li>
            </ul>
            <h4>
                Frontend
            </h4>
            <ul>
                <li>React</li>
                <li>JSX</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <img src='streamin-ss.png' width='600'/>
        </div>
    )
}

export default StreaminProject