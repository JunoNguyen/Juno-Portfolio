import React from 'react';
import './Reset.css';
import './Portfolio.css';
import JATE from '../images/JATE.PNG';
import workboard from '../images/workboard.PNG';
import COVIDTRACKER from '../images/COVID-TRACKER.PNG';
import notetaker from '../images/notetaker.PNG';
import techblog from '../images/techblog.PNG';
import gist from '../images/gist.PNG';

function Portfolio() {
    return (
        <div>
            <div class="body1">
                <div class="allimages">
                    <div class="imagebox">
                        <a href="https://protected-shelf-14357.herokuapp.com/"><img src={techblog} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Tech Blog</h2>
                            <p>Full Stack App</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://skruphold.github.io/Project-1/"><img src={COVIDTRACKER} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Covid Tracker</h2>
                            <p>Full Stack App</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://shielded-escarpment-21478.herokuapp.com/"><img src={notetaker} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Note Taker</h2>
                            <p>Full Stack App</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://grammar-genius.herokuapp.com/"><img src={JATE} alt="JATE" class="images"></img></a>
                        <div>
                            <h2>J.A.T.E.</h2>
                            <p>PWA</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://workboard-uofm-proj2.herokuapp.com/login"><img src={workboard} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>Workboard</h2>
                            <p>Full Stack App</p>
                        </div>
                    </div>
                    <div class="imagebox">
                        <a href="https://gist.github.com/JunoNguyen/c5a514447dae2c279ec8c1fe81da3942"><img src={gist} alt="repo-img" class="images"></img></a>
                        <div>
                            <h2>REGEX Gist</h2>
                            <p>Gist</p>
                        </div>
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