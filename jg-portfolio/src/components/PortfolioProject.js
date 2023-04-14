import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortfolioProject = () => {
    return(
        <div class="text-blue2 text-lg tracking-wide leading-relaxed">
            <h1 class="text-blue5 text-4xl text-center font-mono uppercase tracking-widest py-8">
                Portfolio
            </h1>
            <div class="mx-24 mb-10">
                <p class="pt-6 mb-6 text-center">
                    You're looking at it! My portfolio is my first personal project since graduating from General Assembly. I wanted take this opportunity to brush up on my React skills, including navigation, as well as to teach myself Tailwind.
                </p>
                <div class="flex text-6xl h-20 flex-col items-center hover:text-blue3">
                    <a class="hover:animate-bounce" href='https://github.com/jorge90125/jg-portfolio' target="_blank"><FontAwesomeIcon icon="fa-brands fa-square-github" /></a>
                    <h3 class="text-base">
                        GitHub
                    </h3>
                </div>
            </div>
            <h3 class="text-2xl mt-8 font-mono uppercase tracking-widest text-center text-blue5">
                Utilized Skills and Languages
            </h3>
            <div class="flex justify-left justify-evenly mt-2 pb-10">
                <ul class="list-disc list-inside leading-5">
                    <li>React</li>
                    <li>Tailwind</li>
                </ul>
            </div>
        </div>
    )
}

export default PortfolioProject