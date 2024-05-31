import React from 'react';
import './style.css'

function Contact() {
    return (
        
            <section class="form-box" method="POST">
                <form>
                    <h2>Contact Form</h2>
                    
                    <label for="name">Name</label>
                    <input type="text" name="name" id="name"/>

                    <label for="e-mail">E-mail</label>
                    <input type="text" name="e-mail" id="e-mail"/>

                    <label for="message">Message</label>
                    <textarea id="message" name="message"></textarea>

                    <p id="error">&nbsp;</p>

                    <button id="submit">Submit</button>
                </form>
            </section>
        
    );
}

export default Contact;
