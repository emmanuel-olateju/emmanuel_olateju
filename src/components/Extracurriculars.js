import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';

const Extracurriculars = () => {

    const containerStyle = {
        marginBottom:'10px'
    }
    const jobPositionStyle = {
        fontSize:'16px',
        marginBottom:'15px',
        marginTop:'15px',
        fontWeight:'bold'
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
                <Col xs={6} md={6} lg={2} style={publicationTypeStyle}><b>Societies</b></Col>
                <Col xs={6} md={6} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={paragraphStyle}>International Consortium for Rehabilitation Robotics(ICORR),  Black in AI(BAI), 
                    Data-Science Network, Black in Neuro(BiN)</span>
                    {/* <br/>
                    <p style={paragraphStyle}>
                        Speech Neuroprosthetics, Contrastive Learning
                    </p> */}
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
                    <span style={jobPositionStyle}>Project loudmouths - Volunteer</span>
                    <br/>
                    <p style={paragraphStyle}>
                        Speech Neuroprosthetics, Contrastive Learning
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={jobPositionStyle}>Embedded Software & Electronics Bootcamp - Co-Instructor/Planning Team Member</span>
                    <br/>
                    <p style={paragraphStyle}>
                        Embdedded-C, Electronics, Software to Hardware Interfacing.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={jobPositionStyle}>IEEE Robotics and Automation Society, OAU Student Body- Chair</span>
                    <br/>
                    <p style={paragraphStyle}>
                        Robotics Operating System , Linux Sysytem Administration, Embedded Systems.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row>
                <Col xs={6} md={6} lg={2}></Col>
                <Col xs={6} md={6} lg={6}><hr></hr></Col>
                <Col xs={6} md={6} lg={2} style={publicationTypeStyle}><b>2022</b></Col>
                <Col xs={6} md={6} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={jobPositionStyle}>Neuromatch Academy Computational Neuroscience Program - Attendee</span>
                    <br/>
                    <p style={paragraphStyle}>
                        Computational Neuroscience classes, Research Methodology Classes, Research Project on: "The Basal Gangli and goal directed behavior"
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={jobPositionStyle}>Nigerian Society of Neurological Sciences Annual Scientific Conference - Attendee</span>
                    <br/>
                    <p style={paragraphStyle}>
                        Robot-Assisted Therapy, Stroke Rehabilitation, Medical Technology Collaborations.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={jobPositionStyle}>African regional workshop on SciTinyML - Participant</span>
                    <br/>
                    <p style={paragraphStyle}>
                        Machine Learning on Low-Power Devices
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <span style={jobPositionStyle}>BCI & Neurotech Masterclass Spain 1.0 - Participant</span>
                    <br/>
                    <p style={paragraphStyle}>
                        Brain Computer Interfacing, 24 hours hackathon.
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
                    <span style={jobPositionStyle}>University Technology Science Students Alliance (OAU) - President</span>
                    <br/>
                    <p style={paragraphStyle}>
                        Embedded Systems, Projecr Supervision, Conference Planning, Hackathon Planning. 
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
        </Container>
    );
};

export default Extracurriculars;