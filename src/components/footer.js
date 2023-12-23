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

    return(
        <Container style={containerStyle}>
            <Row>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={0} md={0} lg={8}>
                    <a href="https://www.linkedin.com/in/emmanuel-olateju-aeon/"><Linkedin style={mediaIconStyle} size={20} /></a> {/* Adjust size as needed */}
                    <a href="https://twitter.com/__petron"><Twitter style={mediaIconStyle} size={20} /></a>
                    <a href="https://github.com/emmanuel-olateju"><Github style={mediaIconStyle} size={20} /></a>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
        </Container>
    );
}

export default Footer;