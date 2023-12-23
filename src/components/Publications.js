import React from 'react';

import {Container,Row,Col} from 'react-bootstrap';

const Publications = () => {

    const containerStyle = {
        marginBottom:'10px'
    }
    const paragraphStyle = {
        fontSize:'15px'
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
                <Col xs={6} md={6} lg={2} style={publicationTypeStyle}><b>Publications</b></Col>
                <Col xs={6} md={6} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <b style={paragraphStyle}>Nigerian Schizophrenia EEG Dataset (NSzED) Towards Data-Driven Psychiatry in Africa</b>  (<a href="https://www.overleaf.com/download/project/6551236be33e719f1f2c21f9/build/18c95a998f7-a0cd2c2b01c50c62/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-n2d-b-f-0lsz&enable_pdf_caching=true&popupDownload=true">
                        In preparation
                    </a>)
                    <br/>
                    <p style={paragraphStyle}>
                        Creation of first EEG dataset for schizophrenia studies from West-Africa making use of three EEG devices. Demonstrating an example framework for 
                        continued EEG dataset resource expansion across Africa.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <b style={paragraphStyle}>A Technique for End-effector Force Estimation in Parallelogram 
                    Arm Robot using Link-Integrated Load Cells</b>  (<a href="https://www.researchgate.net/publication/372177454_A_Technique_for_End-Effector_Force_Estimation_in_Parallelogram_Arm_Robot_using_Link-Integrated_Load_Cells">
                        pdf
                    </a>)
                    <br/>
                    <p style={paragraphStyle}>
                        An alternative force sensing method, making use of low-cost load cells 
                        for quantifying user effort in end effector rehabilitation robots in place 
                        of multi-axis force/torque sensors.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row>
                <Col xs={6} md={6} lg={2}></Col>
                <Col xs={6} md={6} lg={6}><hr></hr></Col>
                <Col xs={6} md={6} lg={2} style={publicationTypeStyle}><b>Presentations</b></Col>
                <Col xs={6} md={6} lg={2}></Col>
            </Row>
            <Row style={publicationStyle}>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8}>
                    <b style={paragraphStyle}>Nigerian Schizophrenia EEG Dataset (NSzED) @ 5th <a href="https://appliedair.oauife.edu.ng">A2IR2</a> seminar</b>  (<a href="https://www.overleaf.com/download/project/6551236be33e719f1f2c21f9/build/18c95a998f7-a0cd2c2b01c50c62/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-n2d-b-f-0lsz&enable_pdf_caching=true&popupDownload=true">
                        Slides
                    </a>)
                    <br/>
                    <p style={paragraphStyle}>
                    Presented on the process involved in the creation of the first African EEG dataset for schizophrenia studies and the verification of the data quality by 
                    developing a model for seperating schizophrenic populations from healthy controls.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
        </Container>
    );
};

export default Publications;