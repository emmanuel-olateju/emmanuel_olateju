import React from 'react';
import { Container, Row, Col, Button , Image} from 'react-bootstrap';
import Navigation from './Navigation';
import Intro from './Intro';

const About = () => {

    const containerStyle = {
        marginBottom:'10px'
    }

    const paragraphStyle = {
        fontSize:'15px'
    }

    return (
        <Container style={containerStyle}>
            <Row>
                <Col xs={0} md={0} lg={2}></Col>
                <Col xs={0} md={0} lg={8}>
                    <p style={paragraphStyle}>
                        I hold a degree in Electronic and Electrical Engineering from Obafemi Awolowo University and am a research assistant at the Applied Artificial 
                        Intelligence and Robotics Research Laboratory (A2IR2). Additionally, I work as a teaching assistant for a control systems engineering course. My 
                        research focuses on neurofeedback rehabilitation using responsive robots and advanced brain-computer interfacing technologies like EEG and EMG. I've 
                        gained experience through diverse activities, including a computational neuroscience research course at the Neuromatch Academy. Previous projects 
                        include an EEG-controlled hand orthosis device and a neurofeedback-based planar robot for upper-limb stroke rehabilitation. Currently, I'm involved in 
                        a child study aiming to create the first Nigerian schizophrenia EEG dataset, NSzED, as part of a broader investigation into feature fusion methods for 
                        schizophrenia diagnosis.
                    </p>
                    <p style={paragraphStyle}>
                        During my undergraduate years, I actively organized and participated in various bootcamps, conferences, and workshops focused on embedded systems, 
                        algorithms, data science, and robotics. I held leadership roles, serving as the president and technical director of Obafemi Awolowo University's chapter of 
                        the University Technology Science Students Association (UTSSA) for two years. In this capacity, I organized a conference with a theme centered on health and 
                        technology, along with programming and problem-solving competitions. Additionally, I chaired the university's IEEE Robotics and Automation Society student 
                        body, where I taught ROS and embedded software development. Currently, I lead a team of engineering students participating in an AI competition organized by 
                        AMD.
                    </p>
                    <p style={paragraphStyle}>
                        I serve as a teaching assistant for a control systems engineering course, covering topics such as bode plot, root locus, and controllers. I've 
                        contributed to instructional materials for a course on intelligent controls. Currently, I'm involved in a speech neuroprosthetic competition and mentor 
                        two undergraduates in rehabilitation robotics, as well as one focusing on neural signal processing. In my leisure time, I indulge in playing the keyboard, 
                        watching historical movies, and occasionally playing soccer, or football in certain regions. I cherish all aspects of life, embracing both its highs and 
                        lows.
                    </p>
                </Col>
                <Col xs={0} md={0} lg={2}></Col>
            </Row>
        </Container>
    );
}

export default About;