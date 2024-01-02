import React from 'react';

import {Container, Row, Col, Badge} from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

const researchProjects = () => {

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
    const btnMargin = {
        marginLeft:'10px',
        marginRight:'10px',
        borderColor:'silver',
        color:'silver',
        borderRadius:'25px',
        paddingLeft:'15px',
        paddingRight:'15px',
      }

    return (
        <Container style={containerStyle}>
            <Row>
                <Col xs={0} md={0} lg={5}></Col>
                <Col xs={0} md={0} lg={4} className="justify-content-center">
                    <Link to="/emmanuel_olateju/projects/supervised" style={{marginRight:'10px'}}>
                        <span><ArrowLeft size={20} color="#00917C" /></span>
                    </Link>
                        Scientific Research Projects
                    <Link to="/emmanuel_olateju/projects/embedded" style={{marginLeft:'10px'}}>
                        <span><ArrowRight size={20} color="#00917C" /></span>
                    </Link>
                </Col>
                <Col xs={0} md={0} lg={3}></Col>
            </Row>
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
                    <a href="https://emmanuel-olatejus-organization.gitbook.io/pulsr/" style={mediaIconStyle}>Gitbook <Github size={15} /></a> , <a style={mediaIconStyle} href="https://www.researchgate.net/publication/372177454_A_Technique_for_End-Effector_Force_Estimation_in_Parallelogram_Arm_Robot_using_Link-Integrated_Load_Cells">  
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

export default researchProjects;