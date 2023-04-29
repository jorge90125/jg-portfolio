import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BeatTheBullyProject = () => {
    return(
        <div class="text-blue2 text-lg tracking-wide leading-relaxed">
            <h1 class="text-blue5 text-4xl text-center font-mono uppercase tracking-widest py-8">
                Beat The Bully
            </h1>
            <div class="ml-16 mb-10">
                <img class="float-right pt-6 mx-8 mb-8" src='./beat-the-bully-ss.png' width='600' alt='BeatTheBully'/>
                <p class="pt-6 mb-6 text-right">
                    Beat the Bully was my 1st project for my software engineering immersive course at General assembly. It is a fight simulator that allows the user to distribute ten attribute points to the character in any combination desired. The computer character will randomly distribute the ten attribute points before the battle commences. Once the battle commences, the two characters will automatically fight until one emerges victorious.
                </p>
                <div class="flex flex-row justify-evenly">
                    <div class="flex text-6xl h-20 flex-col items-center hover:text-blue3">
                        <a class="hover:animate-bounce" href='https://github.com/jorge90125/beat-the-bully-project' target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" />
                        </a>
                        <h3 class="text-base">
                            GitHub
                        </h3>
                    </div>
                    <div class="flex text-6xl h-20 flex-col items-center hover:text-blue3">
                        <a class="hover:animate-bounce" href='https://jorge90125.github.io/beat-the-bully-project/' target="_blank">
                            <FontAwesomeIcon icon="fa-solid fa-gamepad" />
                        </a>
                        <h3 class="text-base">
                            Play the Game!
                        </h3>
                    </div>
                </div>
            </div>
            <h3 class="text-2xl mt-24 font-mono uppercase tracking-widest text-center text-blue5">
                Utilized Skills and Languages
            </h3>
            <div class="flex justify-left justify-evenly mt-2 pb-10">
                <ul class="list-disc list-inside leading-5">
                    <li >Javascript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                    <li>DOM Manipulation</li>
                </ul>
            </div>
        </div>
    )
}

export default BeatTheBullyProject