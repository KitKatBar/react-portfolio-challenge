import React, { useState } from 'react';
import './style.css'

function Contact() {
    // Track the state of each field's value
    const [formContent, setFormContent] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Track the state of the error and success messages
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    
    // Function to handle a submit event
    function handleSubmit(event) {
        // Prevent the page from reloading
        event.preventDefault();

        // Check for form validation on submission
        if (validateForm()) {
            // Send a success message
            setSuccess("Thanks for your response!");
            // Reset the input boxes and reset each of the field values
            event.target.reset();
            setFormContent({ name: "", email: "", message: "" });
        }
    }

    // Helper function that validates each field upon submission
    function validateForm() {
        // If there are still empty fields
        if (!formContent.name || !formContent.email || !formContent.message) {
            setError("Please fill out the form!");
            return false;
        }

        // If the email is invalid
        else if (!validate(formContent.email)) {
            setError("Please enter a valid email!");
            return false;
        }

        // Otherwise, the submission seems good to go
        else {
            setError(null);
            return true;
        }
    }

    // Validate the email using a regex and convert the email to lowercase to test
    function validate(email) {
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email.toLowerCase());
    }

    // Function to handle a change in the field's value
    function handleChange(event) {
        // Reset the success message since the user has not submitted the form yet
        setSuccess(null);

        // Get the field name and value that was changed
        const { name, value } = event.target;

        // If the user didn't enter anything, tell them to fill out the form
        if (!value.length) {
            setError("Please fill out the form!");
        }

        else {
            // If the field was the email
            if (name === "email") {
                // Validate the email
                const isValid = validate(value);

                // Send an error message if it is invalid
                if (!isValid) {
                    setError("Please enter a valid email!");
                }

                // Reset the error message
                else {
                    setError(null);
                }
            }

            // Reset the error message
            else {
                setError(null);
            }
        }

        // Set the value of the fields to whatever it currently is
        setFormContent({ ...formContent, [name]: value });
    }
    
    return (
        <section className="contact-content">
            {/* This is an icon for the page */}
            <section className="center-icon">
                <section id="contact-icon"></section>
            </section>
            <h2>
                Form
            </h2>
            {/* This is the contact form box */}
            <section class="form-box">
                {/* Call the form handler when the submit button is clicked */}
                <form onSubmit={handleSubmit}>
                    {/* Fields with handlers if the user has invalid input (or lack of) */}
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name" onBlur={handleChange}/>

                    <label for="email">E-mail</label>
                    <input type="text" name="email" id="email" onBlur={handleChange}/>

                    <label for="message">Message</label>
                    <textarea id="message" name="message" onBlur={handleChange}></textarea>

                    {/* Different messages display based on the error/success messages
                        Empty space if either/neither exists to maintain a smooth display */}
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
