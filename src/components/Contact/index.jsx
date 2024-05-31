import React, { useState } from 'react';
import './style.css'

function Contact() {
    const [formContent, setFormContent] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
    function handleSubmit(event) {
        event.preventDefault();

        if (validateForm()) {
            setSuccess("Thanks for your response!");
            event.target.reset();
            setFormContent({ name: "", email: "", message: "" });
        }
    }

    function validateForm() {
        if (!formContent.name || !formContent.email || !formContent.message) {
            setError("Please fill out the form!");
            return false;
        }

        else if (!validate(formContent.email)) {
            setError("Please enter a valid email!");
            return false;
        }

        else {
            setError(null);
            return true;
        }
    }

    function validate(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email.toLowerCase());
    }

    function handleChange(event) {
        setSuccess(null);
        const { name, value } = event.target;

        if (!value.length) {
            setError("Please fill out the form!");
        }

        else {
            if (name === "email") {
                const isValid = validate(value);

                if (!isValid) {
                    setError("Please enter a valid email!");
                }

                else {
                    setError(null);
                }
            }

            else {
                setError(null);
            }
        }

        setFormContent({ ...formContent, [name]: value });
    }
    
    return (
            <section className="contact-content">
                <section className="center-icon">
                    <section id="contact-icon"></section>
                </section>
                <h2>Contact Form</h2>
            <section class="form-box">
                <form onSubmit={handleSubmit}>
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" onBlur={handleChange}/>

                    <label for="email">E-mail</label>
                    <input type="text" name="email" id="email" onBlur={handleChange}/>

                    <label for="message">Message</label>
                    <textarea id="message" name="message" onBlur={handleChange}></textarea>

                    {error && !success && <p id="error">{error}</p>}
                    {!error && !success && <p id="error">&nbsp;</p>}
                    {error && success && <p id="error">&nbsp;</p>}
                    {!error && success && <p id="error">{success}</p>}

                    <button id="submit">Submit</button>
                </form>
            </section>
        </section>
    );
}

export default Contact;
