import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MyCartProject = () => {
    return(
        <div class="text-blue2 text-lg tracking-wide leading-relaxed">
            <h1 class="text-blue5 text-4xl text-center font-mono uppercase tracking-widest py-8">
                MyCart
            </h1>
            <div class="ml-16 mb-10">
                <img class="float-right pt-6 mx-8 mb-8" src='mycart-ss.png' width='600' alt='MyCartProject'/>
                <p class="pt-6 mb-6 text-right">
                    MyCart was the 2nd solo project for my software engineering immersive course at General assembly. MyCart is a MERN stack app that allows users to register, sign-in, sign-out, and gives full CRUD capabillities. Users can edit their cart items to indicate priority, availability, obtained status, price, category, and give them detailed descriptions.
                </p>
                <div>
                    <div class="flex text-6xl h-20 flex-col items-center hover:text-blue3">
                        <a class="hover:animate-bounce" href='https://github.com/jorge90125/mycart-project' target="_blank">
                            <FontAwesomeIcon icon="fa-brands fa-square-github" />
                        </a>
                        <h3 class="text-base">
                            GitHub
                        </h3>
                    </div>
                </div>
            </div>
            <h3 class="text-2xl mt-20 font-mono uppercase tracking-widest text-center text-blue5">
                Utilized Skills and Languages
            </h3>
            <div class="flex justify-left justify-evenly mt-2 pb-10">
                <ul class="list-disc list-inside leading-5">
                    <li>MongoDB</li>
                    <li>Express.js</li>
                    <li>Javascript</li>
                    <li>CSS</li>
                    <li>Node.js</li>
                </ul>
            </div>
        </div>
    )
}

export default MyCartProject