import './IntroFooter.css'
import insta from '../../assets/icons/instagram.png'
import facebook from '../../assets/icons/facebook.png'
import whatsapp from '../../assets/icons/whatsapp.png'
import { Link } from 'react-router-dom';

const IntroFooter = () => {
    return (
        <div className='intro-footer-main'>
            <div className='intro-footer-container'>
                <div className="services">
                    <p>בדקו מה אנחנו יכולים לעשות עבורכם</p>
                    <Link to="/services" style={{ textDecoration: 'none' }}>
                        <button>השירותים שלנו</button>
                    </Link>
                </div>
                <div className="socials">
                    <a href='https://www.instagram.com/hakamesa_' target='_blank' rel='noopener noreferrer'>
                        <img src={insta} alt="אינסטגרם" />
                    </a>
                    <a href='https://wa.me/972542880545' target='_blank' rel='noopener noreferrer'>
                        <img src={whatsapp} alt="וואטסאפ" />
                    </a>
                    <a href='https://www.facebook.com/YOUR_PAGE_NAME' target='_blank' rel='noopener noreferrer'>
                        <img src={facebook} alt="פייסבוק" />
                    </a>
                </div>
                <div className="contact">
                    <p>054-288-0545</p>
                    <p>|</p>
                    <p>1999hakam@gmail.com</p>
                    <p>|</p>
                    <p>כפר קאסם</p>
                </div>
            </div>
        </div>
    );
};

export default IntroFooter;
