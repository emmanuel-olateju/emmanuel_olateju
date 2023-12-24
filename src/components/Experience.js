import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

const Experience = () => {

    const containerStyle = {
        marginBottom:'10px'
    }
    const paragraphStyle = {
        fontSize:'15px',
        marginBottom:'15px',
        marginTop:'15px'
    }
    const publicationTypeStyle = {
        fontSize:'20px',
        marginLeft:'0px'
    }
    const publicationStyle = {
        marginTop:'15px'
    }

    return (
        <Container style={containerStyle}>
            <Row>
                <Col xs={6} md={6} lg={2}></Col>
                <Col xs={6} md={6} lg={6}><hr></hr></Col>
                <Col xs={6} md={6} lg={2} style={publicationTypeStyle}><b>2021-Present</b></Col>
                <Col xs={6} md={6} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={paragraphStyle}><a href="https://appliedair.oauife.edu.ng">A2IR2</a> - (Lead) Research Assistant</span>
                    <br/>
                    <p style={paragraphStyle}>
                        Rehabilitation Robots, Brain-Computer Interfacing, Embedded Systems, Controls and Instrumentation.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row>
                <Col xs={6} md={6} lg={2}></Col>
                <Col xs={6} md={6} lg={6}><hr></hr></Col>
                <Col xs={6} md={6} lg={2} style={publicationTypeStyle}><b>2023</b></Col>
                <Col xs={6} md={6} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={paragraphStyle}><a href="https://oauife.edu.ng">OAU</a> - Teaching Assistant, Recitation Instructor</span>
                    <br/>
                    <p style={paragraphStyle}>
                        <b>Control Systems Engineering</b>, controllers, Bode Plots, Root Locus,  
                        <b> Intelligent Controls</b>, Gradient Descent, Back-Propagation, Delta Rules, Fuzzy Logic.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row>
                <Col xs={6} md={6} lg={2}></Col>
                <Col xs={6} md={6} lg={6}><hr></hr></Col>
                <Col xs={6} md={6} lg={2} style={publicationTypeStyle}><b>2020-2021</b></Col>
                <Col xs={6} md={6} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={paragraphStyle}>Eon R&D Laboratories - Embedded Electronics Intern</span>
                    <br/>
                    <p style={paragraphStyle}>
                        Biomedical Instrumentation Systems, Wireless Data-Logggers, Signal Processing, CAD Design.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row>
                <Col xs={6} md={6} lg={2}></Col>
                <Col xs={6} md={6} lg={6}><hr></hr></Col>
                <Col xs={6} md={6} lg={2} style={publicationTypeStyle}><b>2018-2020</b></Col>
                <Col xs={6} md={6} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={paragraphStyle}> Trinnex Electronics - Analog & Embedded Electronics Intern</span>
                    <br/>
                    <p style={paragraphStyle}>
                        analog Circuit Design, Embedded Controllers, Automatic Transfer Switch System, Smart Power Systems, Automation Circuits.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
        </Container>
    );
};

export default Experience;