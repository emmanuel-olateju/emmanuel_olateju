import React from 'react';

import {Container, Row, Col, Badge} from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';

import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

const supervisedProjects = () => {

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
                    <Link to="/emmanuel_olateju/projects/analog" style={{marginRight:'10px'}}>
                        <span><ArrowLeft size={20} color="#00917C" /></span>
                    </Link>
                    All Supervised Projects
                    <Link to="/emmanuel_olateju/projects" style={{marginLeft:'10px'}}>
                        <span><ArrowRight size={20} color="#00917C" /></span>
                    </Link>
                </Col>
                <Col xs={0} md={0} lg={3}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={4} style={projectStyle}>
                    <h6 style={projectNameStyle}>SAIL Intrumentation</h6>
                    <span style={badgeWarning}>In Progress</span>
                    <p style={paragraphStyle}>
                        Instrumentation circuitry for data-acquisition in SAIL study
                    </p>
                    <a href="https://github.com/emmanuel-olateju" style={mediaIconStyle}>Github <Github size={15} /></a>
                </Col>
                <Col xs={12} md={12} lg={4} style={projectStyle}>
                    <h6 style={projectNameStyle}>Music Scoring</h6>
                    <span style={badgeWarning}>In Progress</span>
                    <p style={paragraphStyle}>
                        AI for scoring different genre of music
                    </p>
                    <a href="https://github.com/emmanuel-olateju" style={mediaIconStyle}>Github <Github size={15} /></a>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <br></br>
        </Container>
    );
};

export default supervisedProjects;