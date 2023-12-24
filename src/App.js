import './App.css';
import Intro from './components/Intro';
import Navigation from './components/Navigation';
import About from './components/About';
import Publications from './components/Publications';
import Experience from './components/Experience';
import Extracurriculars from './components/Extracurriculars';
import Projects from './components/Projects';
import Footer from './components/footer';

import { Container, Row, Col, Button , Image} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router> 
        <header className="App-header">
            <Intro />
        </header>
        <Navigation />
        <Route exact path={"/emmanuel_olateju/"} component={About} />
        <Route path={"/emmanuel_olateju/pubs"} component={Publications} />
        <Route path={"/emmanuel_olateju/experience"} component={Experience} />
        <Route path={"/emmanuel_olateju/extras"} component={Extracurriculars} />
        <Route path={"/emmanuel_olateju/projects"} component={Projects} />
        <Route path="*" element={About} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;