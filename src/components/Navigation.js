import './Navbar.css'

import React from 'react';
import { Container, Row, Col, Button , Image} from 'react-bootstrap';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Link } from 'react-router-dom';

const Navigation = () => {

  const containerStyle = {
    marginBottom:'30px'
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
  const btnMarginActive = {
    marginLeft:'10px',
    marginRight:'10px',
    borderColor:'#00917C',
    color:'#00917C',
    borderRadius:'25px',
    paddingLeft:'15px',
    paddingRight:'15px',
  }

  return (
    <Container style={containerStyle}>
      <Row>
        <Col xs={12} md={6} lg={2}></Col>
        <Col xs={12} md={6} lg={8}>
          <div className="d-flex justify-content-center mt-3">
            <Link to="/emmanuel_olateju"><Button variant="outline-primary" style={btnMarginActive} className="nav-btn">Bio</Button></Link>
            <Link to="/emmanuel_olateju/pubs"><Button variant="outline-primary" style={btnMarginActive} className="nav-btn">Papers</Button></Link>
            <Link to="/emmanuel_olateju/experience"><Button variant="outline-primary" style={btnMarginActive} className="nav-btn">Experience</Button></Link>
            <Link to="/emmanuel_olateju/extras"><Button variant="outline-primary" style={btnMarginActive} className="nav-btn">Extracurriculars</Button></Link>
            <Link to="/emmanuel_olateju/projects"><Button variant="outline-primary" style={btnMarginActive} className="nav-btn">Projects</Button></Link>
            <Button variant="outline-primary" style={btnMarginActive} className="nav-btn">Videos/More</Button>
          </div>
        </Col>
        <Col xs={12} md={6} lg={2}></Col>
      </Row>
    </Container>
  );
};

export default Navigation;