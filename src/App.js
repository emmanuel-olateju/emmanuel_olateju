import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Research from './components/Research';
import Projects from './components/Projects';
import PersonalProjects from './components/PersonalProjects';
import AcademicCertificates from './components/Certificates';
import Awards from './components/achievements';
import AcademicSocieties from './components/Societies';
import AcademicVolunteering from './components/Volunteering';
import AcademicTestimonials from './components/Testimonials';
import SendIcon from '@mui/icons-material/Send';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="body">
        <div className="left-space"></div>
        <div class="portfolio-body">
          <About />
          <Research />
          <Projects />
          <AcademicSocieties />
          <AcademicTestimonials />
          <AcademicVolunteering />
          <AcademicCertificates />
          <Awards />
          {/* <PersonalProjects /> */}
        </div>
        <div className="right-space"></div>
      </div>
      <div class="footer">
        <div className="social-media">

        </div>
        <div className="contact-me">
          <form>
            <select>
              <option value="eoolateju@student.oauife.edu.ng">eoolateju@student.oauife.edu.ng</option>
              <option value="olatejuemmanuel@gmail.com">olatejuemmanuel@gmail.com</option>
              <option value="linkedin">Linkedin</option>
              <option value="Twitter(X)">Twitter(X)</option>
            </select>
            <textarea placeholder="Enter your message for me"></textarea>
            <button type="submit">
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;