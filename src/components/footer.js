import React from "react";
import { Container, Row, Col, Button , Image} from 'react-bootstrap';
import { Linkedin, Twitter, Github } from 'react-bootstrap-icons';

const Footer = () => {

    const containerStyle = {
        marginBottom:'100px'
    }

    const mediaIconStyle = {
        color: '#00917C',
        marginRight:'20px',
    }

    const mediaIconStyle2 = {
        color: '#00917C',
        textDecoration:'none'
    }

    return(
        <Container style={containerStyle}>
            <br></br>
            <Row>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={0} md={0} lg={8}>
                    <a href="https://www.linkedin.com/in/emmanuel-olateju-aeon/"><Linkedin style={mediaIconStyle} size={20} /></a> {/* Adjust size as needed */}
                    <a href="https://twitter.com/__petron"><Twitter style={mediaIconStyle} size={20} /></a>
                    <a href="https://github.com/emmanuel-olateju"><Github style={mediaIconStyle} size={20} /></a>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <br></br>
            <Row>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={0} md={0} lg={8}>
                    Links: <a href="https://appliedait.oauife.edu.ng">A2IR2</a>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <br></br>
            <Row>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={0} md={0} lg={8} className="justify-content-center" style={{display:"flex",justifyContent:"center"}}>
                    Inspirations: <a style={mediaIconStyle2} href="https://lillyclark.github.io/"> Primary</a>, <a style={mediaIconStyle2} href="https://eondula.github.io/"> Secondary</a>
                    <br></br>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
            <Row>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={0} md={0} lg={8} className="justify-content-center" style={{display:"flex",justifyContent:"center"}}>
                    Last Updated December 2023
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
        </Container>
    );
}

export default Footer;