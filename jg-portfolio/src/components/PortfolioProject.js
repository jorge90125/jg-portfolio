import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortfolioProject = () => {
    return(
        <div>
            <h1>
                Portfolio <a href='https://github.com/jorge90125/jg-portfolio' target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-github" /></a>
            </h1>
            <p>
                You're looking at it!
            <br/>
                My portfolio is my first personal project since graduating from General Assembly.
            <br/>
                I wanted take this opportunity to brush up on my React skills, including navigation, as well as to teach myself Tailwind.
            </p>
            <h3>
                Utilized Skills and Languages
            </h3>
            <ul class="list-disc list-inside">
                <li>React</li>
                <li>Tailwind</li>
            </ul>
        </div>
    )
}

export default PortfolioProject