import faqProject from './assets/faq-project-screenshot.jpeg';
import ageProject from './assets/age-calculator-screenshot.jpeg';
import passwordProject from './assets/password-generator-screenshot.jpeg';

export function Projects() {
    return (
        <>
            <div className="project-container">
                <div className="project">
                    <div className="img-container">
                        <img 
                            src={faqProject}
                            alt='a screenshot of my project'
                            width={'300px'}
                            height={'200px'}
                        />

                        <div className="img-overlay">
                            <a href="https://manualliee.github.io/faqs-project/" target='_blank'>
                                VIEW PROJECT
                            </a>

                            <a href="https://github.com/Manualliee/faqs-project" target='_blank'>
                                VIEW CODE
                            </a>
                        </div>
                    </div>

                    <h4>FAQs</h4>

                    <div className="project-tec">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                </div>

                <div className="project">
                    <div className="img-container">
                        <img
                            src={ageProject}
                            alt='a screenshot of my project'
                            width={'300px'}
                            height={'200px'}
                        />

                        <div className="img-overlay">
                            <a href="https://manualliee.github.io/age-calculator/" target='_blank'>
                                VIEW PROJECT
                            </a>

                            <a href="https://github.com/Manualliee/age-calculator" target='_blank'>
                                VIEW CODE
                            </a>
                        </div>

                    </div>
                    <h4>AGE CALCULATOR</h4>

                    <div className="project-tec">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                </div>

                <div className="project">
                    <div className="img-container">
                        <img 
                            src={passwordProject}
                            alt='a screenshot of my project'
                            width={'300px'}
                            height={'200px'}
                        />

                        <div className="img-overlay">
                            <a href="https://manualliee.github.io/password-generator/" target='_blank'>
                                VIEW PROJECT
                            </a>

                            <a href="https://github.com/Manualliee/password-generator" target='_blank'>
                                VIEW CODE
                            </a>
                        </div>
                    </div>

                    <h4>PASSWORD GENERATOR</h4>

                    <div className="project-tec">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>
        </>
    )
}