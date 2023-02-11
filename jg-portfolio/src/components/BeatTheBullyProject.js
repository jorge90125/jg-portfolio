import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BeatTheBullyProject = () => {
    return(
        <div>
            <h1>
                Beat The Bully <a href='https://github.com/jorge90125/beat-the-bully-project' target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-github" /></a>
            </h1>
            <p>
                Beat the Bully was my 1st project for my software engineering immersive course at General assembly.
            <br/>
                It is a fight simulator that allows the user to distribute ten attribute points to the character in any combination desired.
            <br/>
                The computer character will randomly distribute the ten attribute points before the battle commences.
            <br/>
                Once the battle commences, the two characters will automatically fight until one emerges victorious.
            </p>
            <h3>
                Utilized Skills and Languages
            </h3>
            <ul class="list-disc list-inside">
                <li >Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>DOM Manipulation</li>
            </ul>
            <img src='beat-the-bully-ss.png' width='600'/>
        </div>
    )
}

export default BeatTheBullyProject