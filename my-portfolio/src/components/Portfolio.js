import React from 'react';

function Portfolio() {
    // ADD REPO LINKS 
    const repoLinks = [];
    return (
        <div>
            <nav>
                <h1>
                    Juno Nguyen
                </h1>

                <ul>
                    <li>
                        <a href="https://github.com/JunoNguyen">Github</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/juno-nguyen-16198a226/">Linkedin</a>
                    </li>
                    <li>
                        <a href="mailto: junonguyen27@gmail.com">Send Email</a>
                    </li>
                    <li>
                        <a href="https://drive.google.com/file/d/1EwcOM61_Pfw7VV2mqOUoCjbHzL8bwO3F/view?usp=sharing">Resume</a>
                    </li>
                </ul>
            </nav>
            <div class="body1">
                <header id="ninja">
                    <h2 id="intro">
                        Intro
                    </h2>
                    <p>
                        Hello my name is Juno. I am a student looking for future opportunities within the technological industry.
                        I have grown up around computers and technology my entire life; practically everyone in my family works in the technical field.
                        Currently, I am taking a bootcamp to learn many skills that pertain to technology, and I am always looking to improve my skillset.
                    </p>
                </header>

                <div class="allimages">
                    <div class="imagebox">
                        <a href="https://skruphold.github.io/Project-1/"><img src="https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png" alt="repo-img"></img></a>
                        <div>
                            <h2>Ticket Safety</h2>
                            <p>Server Side APIs</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://junonguyen.github.io/weather-dashboard/"><img src="https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png" alt="repo-img"></img></a>
                        <div>
                            <h2>Weather Dashboard</h2>
                            <p>Local Storage</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://junonguyen.github.io/workday-scheduler/"><img src="assets/images/Capture.PNG" alt="repo-img"></img></a>
                        <div>
                            <h2>Day Planner</h2>
                            <p>Local APIs</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://junonguyen.github.io/first-homework/"><img src="https://feedsportal.com/wp-content/uploads/2021/01/improving-efficiency.png" alt="repo-img"></img></a>
                        <div>
                            <h2>Efficiency</h2>
                            <p>Source Code Editing</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://workboard-uofm-proj2.herokuapp.com/login"><img src="assets/images/workboard.PNG" alt="repo-img"></img></a>
                        <div>
                            <h2>Workboard</h2>
                            <p>Full Stack App</p>
                        </div>
                    </div>
                </div>
                <div id="apicontainer">
                    <div id="btncontainer">
                        <button id="repobutton">List of my Repos</button>
                        <ul id="repos"></ul>
                    </div>
                </div>
                <div class="footer">
                    <h2>
                        Created by Juno Nguyen
                    </h2>
                    <p>
                        &copy; 2021 Juno Nguyen Coding Services, Inc.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;