import './Intro.css'
import React from 'react';
import { Container, Row, Col, Button , Image} from 'react-bootstrap';
import me from '../images/petron_conv_face.jpg';

const Intro = () =>{

    const wrapperStyle = {
        marginTop:'100px',
        marginBottom:'50px'
    }
    const nameStyle = {
        fontSize:'30px',
    }
    const positionStyle = {
        fontSize:'18px'
    }
    const UniversityStyle = {
        fontSize:'25px',
        textDecoration:'none',
        color:'#00917C'
    }

    return (
        <Container style={wrapperStyle}>
            <Row>
                <Col xs={12} md={0} lg={2}></Col>
                <Col xs={12} md={12} lg={8} className="d-flex align-items-center justify-content-center">
                    <p className="columnsNoMargin">
                        <span style={nameStyle}>Emmanuel  Oluwasegun  Olateju</span>
                        <br></br>
                        <span style={positionStyle}>Research/Teaching Assistant @</span> <a style={UniversityStyle} href="https://oauife.edu.ng">Obafemi Awolowo University</a>
                    </p>
                    <Image src={me} width={235} height={235} className='rounded-circle'/>
                </Col>
                <Col xs={12} md={0} lg={2}></Col>
            </Row>
        </Container>
    );
};

export default Intro;