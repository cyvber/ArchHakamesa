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
                    <img src={insta} alt="אינסטגרם" />
                    <img src={whatsapp} alt="וואטסאפ" />
                    <img src={facebook} alt="פייסבוק" />
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
