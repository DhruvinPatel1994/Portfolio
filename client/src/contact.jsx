// Contact.jsx

import React from 'react';
import '../src/contact.css'; // Assuming you have a CSS file for styling

export default function Contact() {
    const handleSubmit = (event) => {
        // Handle form submission logic (can be added later)
        event.preventDefault();
        alert('Form submitted! Redirecting to Home Page.');
        // Redirect to the Home Page (replace '/home' with your actual home page route)
        window.location.href = '/home';
    };

    return (
        <div className="contactContainer">
            <div className="contactPanel">
                <h2>Contact Information</h2>
                <p><i>Reach Me Out: <strong>437.499.4866 </strong></i></p>
                <p>Facebook: www.facebook.com</p>
                <p>Email: dhruvin2213@gmail.com</p>
            </div>

            <form id="contactForm" onSubmit={handleSubmit}>
                <h2>Contact Me</h2>

                <div className="formGroup">
                    <label htmlFor="myFName">*First Name:</label>
                    <input type="text" id="myFName" name="myFName" required autoFocus />
                </div>

                <div className="formGroup">
                    <label htmlFor="myLName">*Last Name:</label>
                    <input type="text" id="myLName" name="myLName" required />
                </div>

                <div className="formGroup">
                    <label htmlFor="myEmail">*Email:</label>
                    <input type="email" id="myEmail" name="myEmail" required />
                </div>

                {/* Additional fields can be added for contact number, message, etc. */}

                <div className="formGroup">
                    <input type="submit" className="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}
