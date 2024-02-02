import React from 'react';
import { Link } from 'react-router-dom';
import '../src/index.css';
import '../src/project.css';

import project1Image from '../src/assets/project1.png';
import project2Image from '../src/assets/project2.jpg';
import project3Image from '../src/assets/project3.jpg';

export default function Project() {
    return (
        <>
            <section id="works">
                <h2 className="worksTitle">My Projects</h2>
                <span className="worksDesc">
                    I take pride in paying attention to the smallest details and making sure my work is pixel perfect.
                    I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
                </span>
                <div className="worksImgs">
                    <div className="workItem">
                        <img src={project1Image} alt="project1" className="worksImg" />
                        <div className="workDetails">
                            <h3>Project 1</h3>
                            <p>
                                Short description of your role and the outcome for Project 1 goes here.
                                You can provide details like technologies used, your responsibilities, and the impact of the project.
                            </p>
                        </div>
                    </div>
                    <div className="workItem">
                        <img src={project2Image} alt="project2" className="worksImg" />
                        <div className="workDetails">
                            <h3>Project 2</h3>
                            <p>
                                Short description of your role and the outcome for Project 2 goes here.
                            </p>
                        </div>
                    </div>
                    <div className="workItem">
                        <img src={project3Image} alt="project3" className="worksImg" />
                        <div className="workDetails">
                            <h3>Project 3</h3>
                            <p>
                                Short description of your role and the outcome for Project 3 goes here.
                            </p>
                        </div>
                    </div>
                </div>
                <Link to="/projects" className="workBtn">
                    See More
                </Link>
            </section>
        </>
    );
}
