import React from 'react';

import {Container, Row, Col, Badge} from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';

const Projects = () => {

    const containerStyle = {
        marginBottom:'10px'
    }
    const paragraphStyle = {
        fontSize:'15px',
        marginTop:'5px',
        marginBottom:'10px'
    }
    const publicationTypeStyle = {
        fontSize:'17px',
        marginLeft:'0px',
    }
    const publicationStyle = {
        marginTop:'15px'
    }
    const projectStyle = {
        border: '1px solid #eeeeee',
        borderRadius:'10px',
        paddingLeft:'20px',
        marginRight:'12px',
        marginLeft:'12px',
        paddingBottom:'20px'
    }
    const projectNameStyle = {
        color:'#aaaaaa',
        fontSize:'17px',
        marginTop:'20px',
        marginBottom:'10px'
    }
    const badgeWarning = {
        backgroundColor: '#ffc107',
        color: 'white',
        borderRadius :'5px',
        padding:'2px 6px 2px 6px',
        fontSize:'12px',
    }
    const badgeSuccess = {
        backgroundColor: '#198754',
        color: 'white',
        borderRadius :'5px',
        padding:'2px 6px 2px 6px',
        fontSize:'12px',
    }
    const mediaIconStyle = {
        color: '#00917C',
        textDecoration:'none'
    }

    return (
        <Container style={containerStyle}>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={4} style={projectStyle}>
                    <h6 style={projectNameStyle}>NSzED</h6>
                    <span style={badgeWarning}>In Progress</span>
                    <p style={paragraphStyle}>
                        Creation of first African EEG dataset for schizophrenia studies and simple RBFN network.
                    </p>
                    <a href="https://github.com/emmanuel-olateju" style={mediaIconStyle}>Paper <Github size={15} /></a>
                </Col>
                <Col xs={12} md={12} lg={4} style={projectStyle}>
                    <h6 style={projectNameStyle}>REMRES</h6>
                    <span style={badgeWarning}>In Progress</span>
                    <p style={paragraphStyle}>
                        Virtual Reality & EMG integration for prosthetics/rehabilitation practice software. 
                    </p>
                    <a href="https://github.com/emmanuel-olateju" style={mediaIconStyle}>Article <Github size={15} /></a>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <br></br>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={4} style={projectStyle}>
                    <h6 style={projectNameStyle}>PULSR</h6>
                    <span style={badgeSuccess}>Deployed</span>
                    <p style={paragraphStyle}>
                        Planar robot for upper-limb stroke rehabilitation via reactive exercise integrating novel force sensing (SAIL).
                    </p>
                    <a href="https://github.com/emmanuel-olateju" style={mediaIconStyle}>Github <Github size={15} /></a> , <a style={mediaIconStyle} href="https://www.researchgate.net/publication/372177454_A_Technique_for_End-Effector_Force_Estimation_in_Parallelogram_Arm_Robot_using_Link-Integrated_Load_Cells">  
                         SAIL Paper</a>
                </Col>
                <Col xs={12} md={12} lg={4} style={projectStyle}>
                    <h6 style={projectNameStyle}>Engagement Indexer</h6>
                    <span style={badgeSuccess}>Complete</span>
                    <p style={paragraphStyle}>
                        EEG based neurofeedback for rewarding motor- imagery and action in stroke rehabilitation exercise. 
                    </p>
                    <a href="https://github.com/emmanuel-olateju" style={mediaIconStyle}>Article <Github size={15} /></a>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <br></br>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={4} style={projectStyle}>
                    <h6 style={projectNameStyle}>MCHO</h6>
                    <span style={badgeSuccess}>Deployed</span>
                    <p style={paragraphStyle}>
                        EEG based system for control of hand-orthosis device utilizing motor-imagery.
                    </p>
                    <a href="https://github.com/emmanuel-olateju" style={mediaIconStyle}>Github <Github size={15} /></a>
                </Col>
                <Col xs={12} md={12} lg={4}>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
        </Container>
    );
};

export default Projects;

// import React from 'react';

// const Projects = () => {
//     return (
//         <div className="Projects">
//             <h2>Academic Works</h2>
//             <div className="project">
//                 <div className="project-media">

//                 </div>
//                 <div className="project-content">
//                     <h3>
//                         <em>(GENERIS)</em> Development of an  Instrument for Schizophrenia(SZ) Diagnosis.
//                     </h3>
//                     <p>
//                         We used an RBFN with mismatch negativit(MMN), auditory steady state response(ASSR) and fuzzy entropy from EEG signals as inputs 
//                         in developing a classifier that objectively seperates shizophrenia(full blown, early/onset psychosis) patients from healthy controls.
//                     </p>
//                 </div>
//             </div>
//             <div className="project">
//                 <div className="project-media">

//                 </div>
//                 <div className="project-content">
//                     <h3>
//                         <em>(PULSR)</em> Platform for Upper Limb Stroke Rehabiltation
//                     </h3>
//                     <p>
//                         We developed an exoskeleton robot for upper-limb stroke rehabilitation and implemented <a href="https://www.researchgate.net/publication/372177454_A_Technique_for_End-Effector_Force_Estimation_in_Parallelogram_Arm_Robot_using_Link-Integrated_Load_Cells"> SAIL </a> 
//                         a novel technology for end-effector patient input force estimation. We implemented an MLPN using EEG data as input to quantify patient during exercise engagement index. We developed 
//                         software that gamifies exercise sessions with visual feedback of progress and engagement index.
//                     </p>
//                 </div>
//             </div>
//             <div className="project">
//                 <div className="project-media">

//                 </div>
//                 <div className="project-content">
//                     <h3>
//                         <em>(MCHO)</em>Motor-Imagery Controlled Hand Orthosis
//                     </h3>
//                     <p>
//                         We used a CNN and an LSTM seperately in identifying motor-imagery activity related to flexion and extension of the hands. EEG spatial(Common spatial Patterns, Filter Banks Common Spatial Patterns) 
//                         and time-frequency(short time fourier transform and wavelet transform) measures were employed as features to the neural networks. Net accuracy of 65% across six subjects obtained with 
//                         best subject specific performance reaching 85%.
//                     </p>
//                 </div>
//             </div>
//             <div className="project">
//                 <div className="project-media">

//                 </div>
//                 <div className="project-content">
//                     <h3>
//                         <a href="https://github.com/emmanuel-olateju/NMA_project">Neuromatch Academy 2022 Project</a>
//                     </h3>
//                     <p>
//                         Investigated the relationship between motivation, reward circuitry presence and basal ganglia activity. Steinmetz dataset of rat exercise used.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };
// export default Projects;