import { useState } from 'react';


export function Contact() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorEmail, setErrorEmail] = useState("");
    const [errorInputMessage, setErrorInputMessage] = useState("");

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameValidation = () => {
        const inputName = '';

        if (fullName == inputName) {
            setErrorName("Cannot have an empty input.")
            nameInput.style = "border-bottom: 1px solid #FF6F5B;"

        } else {
            setErrorName("");
            nameInput.style = "border-bottom: 1px solid hsl(153, 71%, 59%);"

        }
    }

    const emailValidation = () => {
        const regEx = /[a-zA-Z0-9+_%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;

        if (email == "") {
            setErrorEmail("Sorry, cannot have empty input.")
            emailInput.style = "border-bottom: 1px solid #FF6F5B;"

        } else if(!regEx.test(email)) {
            setErrorEmail("Sorry, invalid format here.")
            emailInput.style = "border-bottom: 1px solid #FF6F5B;"

        } else {
            setErrorEmail("");
            emailInput.style = "border-bottom: 1px solid hsl(153, 71%, 59%);"

        }
    }

    const inputMessageValidation = () => {
        const emptyInputMessage = '';

        if (inputMessage == emptyInputMessage) {
            setErrorInputMessage("Cannot have an empty input.");
            messageInput.style = "border-bottom: 1px solid #FF6F5B;"

        } else {
            setErrorInputMessage("");
            messageInput.style = "border-bottom: 1px solid hsl(153, 71%, 59%);"

        }
    }

    //on submit 
    const handleSubmit = (e) => {
        e.preventDefault();

        nameValidation();
        emailValidation();
        inputMessageValidation();
    }

    //handle user input changes
    const handleNameChange = (e) => {
        setFullName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);  
    }

    const handleMessageChange = (e) => {
        setInputMessage(e.target.value);
    }

    return (
        <>
            <div className="contact-container">
                <div className="contact-heading">
                    <h2>Contact</h2>
                    <p>
                        I would love to hear about your project and how 
                        I can be a part of it. Please fill out the
                        form, and I will get back to you as soon as possible.
                    </p>

                </div>

                <form className="contact-form" action="https://formsubmit.co/manuelvenegas98@gmail.com" method="POST" onSubmit={handleSubmit} >
                    <input 
                        className="name"
                        type="text" 
                        id="name" 
                        name="Name" 
                        maxLength={50}
                        autoComplete="off"
                        placeholder="NAME"
                        onChange={handleNameChange}  
                        value={fullName}
                    />
                    <label id="name-error" className="name-error">
                        {errorName}
                    </label>

                    <input 
                        className="email"
                        type="email" 
                        id="email" 
                        name="Email" 
                        size={30}
                        placeholder="EMAIL" 
                        autoComplete="off"
                        value={email}
                        onChange={handleEmailChange} 
                    />
                    <label id="email-error" className="email-error">
                        {errorEmail}
                    </label>

                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="MESSAGE" 
                        rows={"4"}
                        cols={"50"}
                        value={inputMessage}
                        onChange={handleMessageChange}
                    />
                    <label id="message-error" className="message-error">
                        {errorInputMessage}
                    </label>

                    <input 
                        className="submit-button" 
                        type="submit" 
                        value="SEND MESSAGE"  
                    />

                </form>

            </div>
        </>
    )
}