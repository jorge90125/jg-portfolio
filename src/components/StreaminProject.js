import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StreaminProject = () => {
    return(
        <div class="text-blue2 text-lg tracking-wide leading-relaxed">
            <h1 class="text-blue5 text-4xl text-center font-mono uppercase tracking-widest py-8">
                Streamin
            </h1>
            <div class="ml-16 mb-10">
                <img class="float-right pt-6 mx-8 mb-8" src='streamin-ss.png' width='600' alt='StreaminProject'/>
                <p class="pt-6 mb-6 text-right text-base">
                    Streamin is the group project for for my software engineering immersive course at General assembly. It was a full-stack MERN app collaboration between myself, Bernard Calma, and Rousse Bidon. Streamin uses user authentication to allow users to post embeded videos from most popular streaming platform with full CRUD capabillities. Users can also like videos that other users have posted. As well as comment on their own and eachothers' videos and like said comments. The app also allows the user to search the database of all videos based on the titles of the uploaded videos. My main responsibilities were to work on user verification, the register route, the comment function, the like function, as well as some miscellaneous frontend work.
                </p>
                <div class="flex flex-row justify-evenly">
                    <div class="flex text-6xl h-20 flex-col items-center hover:text-blue3">
                        <a class="hover:animate-bounce" href='https://github.com/Bernard-Calma/streamin-frontend' target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" />
                        </a>
                        <h3 class="text-base">
                            Frontend
                        </h3>
                    </div>
                    <div class="flex text-6xl h-20 flex-col items-center hover:text-blue3">
                        <a class="hover:animate-bounce" href='https://github.com/Bernard-Calma/streamin-backend' target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" />
                        </a>
                        <h3 class="text-base">
                            Backend
                        </h3>
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
                        <li>MongoDB</li>
                        <li>Express.js</li>
                        <li>Node.js</li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-lg underline text-blue5 font-mono uppercase tracking-widest">
                        Frontend
                    </h4>
                    <ul class="list-disc list-inside leading-5">
                        <li>React</li>
                        <li>JSX</li>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default StreaminProject