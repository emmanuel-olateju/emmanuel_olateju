import React from 'react';

import {Container, Row, Col, Badge} from 'react-bootstrap';
import { Github } from 'react-bootstrap-icons';

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

import embeddedProjects from './EmbeddedProjects';
import researchProjects from './researchProjects';
import analogProjects from './analogProjects';
import supervisedProjects from './supervisedProjects';

const Projects = () => {

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

      return(
        <>
            <Router>
                <Route exact path={"/emmanuel_olateju/projects"} component={researchProjects} />
                <Route path={"/emmanuel_olateju/projects/embedded"} component={embeddedProjects} />
                <Route path={"/emmanuel_olateju/projects/analog"} component={analogProjects} />
                <Route path={"/emmanuel_olateju/projects/supervised"} component={supervisedProjects} />
                <Route path="*" element={researchProjects} />
            </Router>
        </>
      );
};

export default Projects;