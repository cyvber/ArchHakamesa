import ContactPage from '../../pages/contact/ContactPage';
import './ContactSection.css'
// import contact_image from '../../assets/imgs/building-belowview.jpg';
import abouts from '../../assets/data/abouts';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ContactSection = () => {
    const location =useLocation()
    useEffect(() => {
        if (sessionStorage.getItem('scrollToContact') === 'true') {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
          }
          sessionStorage.removeItem('scrollToContact');
        }
      }, [location]);
    return (
        <div className='contact-section' id='contact'>
            <div className="contact-section-text">
                <h2>{abouts.conclusion}</h2>
            </div>
            <div className="contact-section-form">
                <ContactPage />
            </div>
            {/* <div className="contact-image-container">
                <img src={contact_image} alt="" className="contact-image" />
            </div>
            <div className="contact-section-overlay"></div> */}
        </div>
    );
};

export default ContactSection;