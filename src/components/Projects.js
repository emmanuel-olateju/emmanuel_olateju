import React from 'react';

const Projects = () => {
    return (
        <div className="Projects">
            <h2>Academic Works</h2>
            <div className="project">
                <div className="project-media">

                </div>
                <div className="project-content">
                    <h3>
                        <em>(GENERIS)</em> Development of an  Instrument for Schizophrenia(SZ) Diagnosis.
                    </h3>
                    <p>
                        We used an RBFN with mismatch negativit(MMN), auditory steady state response(ASSR) and fuzzy entropy from EEG signals as inputs 
                        in developing a classifier that objectively seperates shizophrenia(full blown, early/onset psychosis) patients from healthy controls.
                    </p>
                </div>
            </div>
            <div className="project">
                <div className="project-media">

                </div>
                <div className="project-content">
                    <h3>
                        <em>(PULSR)</em> Platform for Upper Limb Stroke Rehabiltation
                    </h3>
                    <p>
                        We developed an exoskeleton robot for upper-limb stroke rehabilitation and implemented <a href="https://www.researchgate.net/publication/372177454_A_Technique_for_End-Effector_Force_Estimation_in_Parallelogram_Arm_Robot_using_Link-Integrated_Load_Cells"> SAIL </a> 
                        a novel technology for end-effector patient input force estimation. We implemented an MLPN using EEG data as input to quantify patient during exercise engagement index. We developed 
                        software that gamifies exercise sessions with visual feedback of progress and engagement index.
                    </p>
                </div>
            </div>
            <div className="project">
                <div className="project-media">

                </div>
                <div className="project-content">
                    <h3>
                        <em>(MCHO)</em>Motor-Imagery Controlled Hand Orthosis
                    </h3>
                    <p>
                        We used a CNN and an LSTM seperately in identifying motor-imagery activity related to flexion and extension of the hands. EEG spatial(Common spatial Patterns, Filter Banks Common Spatial Patterns) 
                        and time-frequency(short time fourier transform and wavelet transform) measures were employed as features to the neural networks. Net accuracy of 65% across six subjects obtained with 
                        best subject specific performance reaching 85%.
                    </p>
                </div>
            </div>
            <div className="project">
                <div className="project-media">

                </div>
                <div className="project-content">
                    <h3>
                        <a href="https://github.com/emmanuel-olateju/NMA_project">Neuromatch Academy 2022 Project</a>
                    </h3>
                    <p>
                        Investigated the relationship between motivation, reward circuitry presence and basal ganglia activity. Steinmetz dataset of rat exercise used.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Projects;