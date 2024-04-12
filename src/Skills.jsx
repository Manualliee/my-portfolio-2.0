import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export function Skills() {
    return (
        <>
            <div className="skills-container">
                <div className="skill">
                    <FaHtml5 className="skill-icon" />
                    <h3>HTML</h3>
                    <p>2.5 Years Experience</p>
                </div>

                <div className="skill">
                    <IoLogoCss3 className="skill-icon" />
                    <h3>CSS</h3>
                    <p>2.5 Years Experience</p>
                </div>

                <div className="skill">
                    <IoLogoJavascript className="skill-icon" />
                    <h3>JavaScript</h3>
                    <p>2 Years Experience</p>
                </div>

                <div className="skill">
                    <FaReact className="skill-icon" />
                    <h3>React</h3>
                    <p>1.5 Year Experience</p>
                </div>

                <div className="skill">
                    <FaGitAlt className="skill-icon" />
                    <h3>Git</h3>
                    <p>1.5 Years Experience</p>
                </div>

                <div className="skill">
                    <FaGithub className="skill-icon" />
                    <h3>Github</h3>
                    <p>1.5 Years Experience</p>
                </div>
            </div>
        </>
    )
}