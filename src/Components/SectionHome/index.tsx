import React from "react";
import "./index.scss"

import Profile from "../../assets/profile.jpg"

export function SectionHome() {
    return (
        <section id="home">
            <p>Front-end Developer</p>
            <p className="title">I’m <b>Vitória Fontoura</b></p>
            <img className="profile-picture" src={ Profile } alt="Profile Picture" />
            <p className="description">
                <b>Front End Developer</b> who focuses on writing clean, elegant and efficient code.
            </p>

            <div className="links">
                <a href="https://www.linkedin.com/in/vitoriabf" target="_blank" rel="nofollow, noreferrer, noopener, external"><img src="https://img.icons8.com/nolan/50/linkedin-circled.png" alt="linkedin"/></a>
                <a href="https://www.twitter.com/vivsbf" target="_blank" rel="nofollow, noreferrer, noopener, external"><img src="https://img.icons8.com/nolan/50/twitter.png" alt="twitter"/></a>
                <a href="https://www.github.com/vitoriabf" target="_blank" rel="nofollow, noreferrer, noopener, external"><img src="https://img.icons8.com/nolan/50/github.png" alt="github"/></a>
                <a href="mailto:vitoriabfontoura@gmail.com" target="_blank" rel="nofollow, noreferrer, noopener, external"><img src="https://img.icons8.com/nolan/50/gmail.png" alt="gmail"/></a>
            </div>


        </section>

    )
}