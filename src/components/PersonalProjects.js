import React from 'react';

const PersonalProjects = () => {
    return (
        <div className="Projects">
            <h2>Personal Projects</h2>
            <div className="project">
                <div className="project-media">

                </div>
                <div className="project-content">
                    <h3>
                        <em>(<a href="#">REMRES</a>)</em>Residual Motor Recovery System
                    </h3>
                    <p>
                        We are developing an LSTM that maps wavelet transform feature of EMG signals from the arm to control signals for the forearm, wrist and hand. We developed a gamified environment(desktop & VR) for amputees 
                        to practice control of prosthetic devices. Implemented data and feature storage system for continued development processes.
                    </p>
                </div>
            </div>
            <div className="project">
                <div className="project-media">

                </div>
                <div className="project-content">
                    <h3>
                        <a href="#"> PPG Based Glucose Indexer </a>
                    </h3>
                    <p>
                        Developed an infrared based photoplethysmogram device(PPG) device that reports blood volume changes and heart rate. Developed linear regression model that 
                        maps the blood volume changes and heart rate to blood glucose level.
                    </p>
                </div>
            </div>
            <div className="project">
                <div className="project-media">

                </div>
                <div className="project-content">
                    <h3>
                        <a href="#"> Psychiatric chatbot </a>
                    </h3>
                    <p>
                        Developing mental health adversarial chatbot with functionality like chatgpt.
                    </p>
                </div>
            </div>
            <div className="project">
                <div className="project-media">

                </div>
                <div className="project-content">
                    <h3>
                        <a href="#"> MedBots </a>
                    </h3>
                    <p>
                        Developing a suite of AI tools geared towards medical diagnosis and telehealth services.
                    </p>
                </div>
            </div>
            <div className="project">
                <div className="project-media">

                </div>
                <div className="project-content">
                    <h3>
                        <a href="#"> Processor </a>
                    </h3>
                    <p>
                        Developed finite state machine for OPCode and ALU implementation of a 2bits processor using max10delite.
                    </p>
                </div>
            </div>
            <div className="project">
                <div className="project-media">

                </div>
                <div className="project-content">
                    <h3>
                        BLDC Motor Controller
                    </h3>
                    <p>
                        Developed firmware for controlling three phase half-bridge circuitry to drive a 3-phase BLDC motor.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PersonalProjects;