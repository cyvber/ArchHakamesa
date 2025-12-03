import './ServicesListPage.css';
import { services } from '../../assets/data/services';

const ServicesListPage = () => {
    return (
        <div className="services-container">
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img 
                            src={service.image} 
                            alt={service.name} 
                            className="service-image fade-in" 
                            loading='lazy'
                        />
                        <h2 className="service-name">{service.name}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesListPage;
