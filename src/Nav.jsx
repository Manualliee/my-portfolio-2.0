import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

export function Nav() {
    return (
        <>
            <nav className='portfolio-nav'>
                <p className='nav-name'>
                    Manualliee
                </p>

                <ul>
                    <li>
                        <a href="https://github.com/Manualliee" target="_blank">
                            <IconContext.Provider value={{ className: "icon" }}>
                                <FaGithub />
                            </IconContext.Provider>
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/manuel-francisco-venegas/" target="_blank">
                            <IconContext.Provider value={{ className: "icon" }}>
                                <FaLinkedin />
                            </IconContext.Provider>
                        </a>
                    </li>
                </ul>
          </nav>
        </>
    )
}

