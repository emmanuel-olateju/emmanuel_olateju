import React from 'react';

const Research = () => {
    return (
        <div className="Research">
            <h2>Research</h2>
            <p>
            I am a researcher who is interested in developing state-of-the-art tools 
            for medical diagnostics, rehabilitation, and human-computer interaction 
            using electrophysiological signals and robotic hardware siolutions. I am particularly interested in the 
            challenges of data gathering, deployment, sustainability, and scalability 
            of these solutions.
            </p>
            <div className="publication">
                <div className="publication-media"></div>
                <div className="publication-content">
                    <a href="https://www.researchgate.net/publication/372177454_A_Technique_for_End-Effector_Force_Estimation_in_Parallelogram_Arm_Robot_using_Link-Integrated_Load_Cells">
                        A Technique for End-effector Force Estimation in Parallelogram 
                        Arm Robot using Link-Integrated Load Cells
                    </a>
                    <br/>
                    <p>
                        An alternative force sensing method, making use of low-cost load cells 
                        for quantifying user effort in end effector rehabilitation robots in place 
                        of multi-axis force/torque sensors.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Research;