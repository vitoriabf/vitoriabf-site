import React, { useState } from "react";
import "./index.scss";

export function SectionSkills() {

    const [skill, setSkill] = useState<Array<string>>([]);

    return (
        <section id="skills">
            <div className="skills-title">
                <hr/>
                <h1>Skills</h1>
                <hr/>
            </div>

            <div className="skills-container">
                

                <ul className="skills-content">
                    <li className="skills-items" onMouseOver={() => setSkill(["HTML5"])} onMouseOut={() => setSkill([""])}>
                        <img src="https://img.icons8.com/color/64/000000/html-5--v2.png" alt="HTML5"/>
                    </li>
                    <li className="skills-items" onMouseOver={() => setSkill(["CSS3"])} onMouseOut={() => setSkill([""])}>
                        <img src="https://img.icons8.com/color/64/000000/css3.png" alt="CSS3"/>
                    </li>
                    <li className="skills-items" onMouseOver={() => setSkill(["JavaScript"])} onMouseOut={() => setSkill([""])}>
                        <img src="https://img.icons8.com/color/64/000000/javascript--v1.png" alt="JavaScript"/>
                    </li>
                    <li className="skills-items" onMouseOver={() => setSkill(["React"])} onMouseOut={() => setSkill([""])}>
                        <img src="https://img.icons8.com/color/64/000000/react-native.png" alt="React"/>
                    </li>
                    <li className="skills-items" onMouseOver={() => setSkill(["Typescript"])} onMouseOut={() => setSkill([""])}>
                        <img src="https://img.icons8.com/color/64/000000/typescript.png" alt="Typescript"/>
                    </li>
                    <li className="skills-items" onMouseOver={() => setSkill(["Git"])} onMouseOut={() => setSkill([""])}>
                        <img src="https://img.icons8.com/color/64/000000/git.png" alt="Git"/>
                    </li>
                    <li className="skills-items" onMouseOver={() => setSkill(["Figma"])} onMouseOut={() => setSkill([""])}>
                        <img src="https://img.icons8.com/color/64/000000/figma.png" alt="Figma"/>
                    </li>
                </ul>
                <div className="skills-items">
                    <p>{skill[0]}</p>
                </div>
            </div>
        </section>

    )
}