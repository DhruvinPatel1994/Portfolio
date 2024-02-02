// About.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../src/about.css';
// import resumePDF from '../src/assets/your_resume.pdf'; // Replace with the actual path to your PDF resume

export default function About() {
    return (
        <>
            <section id="about">
                <div className="aboutMe">
                    <h2>Dhruvin Patel</h2>
                    <p>
                        I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
                        I have a strong understanding of design and a keen eye for detail.
                        Proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.
                    </p>
                    {/* Uncomment the link below once you have a valid resume PDF path */}
                    {/* <Link to={resumePDF} target="_blank" className="resumeLink">
                        View Resume (PDF)
                    </Link> */}
                    <button onClick={() => window.open(resumePDF, '_blank')} className="resumeButton">
                        View Resume
                    </button>
                </div>

                <div className="skills">
                    <span className="skillsTitle">What I Do</span>
                    <div className="skillBar">
                        <div className="skillBarText">
                            <h2>UI/UX Design</h2>
                            <p>This is a demo text, you can write your own content here.</p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <div className="skillBarText">
                            <h2>Web Design</h2>
                            <p>This text can be changed while making a production-ready website.</p>
                        </div>
                    </div>

                    <div className="skillBar">
                        <div className="skillBarText">
                            <h2>App Design</h2>
                            <p>You can write text related to mobile app development.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
