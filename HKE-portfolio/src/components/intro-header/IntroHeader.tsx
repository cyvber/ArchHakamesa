import { Link } from 'react-router-dom';
import './IntroHeader.css';

const IntroHeader = () => {
    return (
        <div className='intro-header-main'>
            <div className="intro-header-container">
                <p>ARCHITECTURE DESIGN AT ITS FINEST</p>
                <hr />
                <Link to="/projects" style={{ textDecoration: 'none' }}>
                    <button>לראות פרויקטים</button>
                </Link>
            </div>
        </div>
    );
};

export default IntroHeader;
