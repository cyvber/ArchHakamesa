import './AboutSection.css'
import logo from '../../assets/logo/HakamEsa-logo-black-trns.png';
import watermark from '../../assets/logo/H-logo-black-trns.png';
import abouts from '../../assets/data/abouts';

const AboutSection = () => {
    return (
        <div className='about-section'>
            <div className="about-section-container">
                <div className="about-logo">
                    <img src={logo} alt="" />
                </div>
                <div className="about-bottom">
                    <div className="about-text">
                        <h1 className="about-section-title">ח.עיסה אדריכלים</h1>
                        <h2 className="about-section-text">
                        {abouts.summary}
                        </h2>
                    </div>
                    <img src={watermark} alt="" className="watermark" />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;