import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroFooter from './components/intro-footer/IntroFooter';
import IntroHeader from './components/intro-header/IntroHeader';
import NavBar from './components/nav-bar/NavBar';
import ProjectsListPage from './pages/projects-list/ProjectsListPage';
import ViewProjectPage from './pages/project-view/ViewProjectPage';
import ServicesListPage from './pages/services/ServicesListPage';
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';
import ServicesCarousel from './components/services-carousel/ServicesCarousel';
import ContactSection from './components/contact-section/ContactSection';
import ProjectSection from './sections/projects-section/ProjectSection';
import AboutSection from './sections/about-section/AboutSection';
// import abouts from './assets/data/abouts';

function App() {
  return (
    <Router>
      <div className="main">
        <NavBar />
        <Routes>
          <Route path="/" element={
            <>
                <header className="main-header">
                  <div className="parallax-bg"></div>
                  <div className="main-header-content">
                    <IntroHeader />
                  </div>
                </header>
                <div className="main-body">
                  <AboutSection />
                  <ProjectSection />
                  <ServicesCarousel />
                  {/* <div className="buffer-section"><h2 className='buffer-section-description'>{abouts.conclusion}</h2></div> */}
                  <ContactSection />
                  <IntroFooter />
                </div>
            </>
          } />
          <Route path="/projects" element={<ProjectsListPage />} />
          <Route path="/projects/:id" element={<ViewProjectPage />} />
          <Route path="/services" element={<ServicesListPage />} />
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/about" element={<AboutPage />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
