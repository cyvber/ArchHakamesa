import React, { useRef } from 'react';
import './ServicesCarousel.css';
import { services } from '../../assets/data/services';

const ServicesCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 300; // Adjust as needed

  const handlePrev = () => {
    if (carouselRef.current) {
      if (window.innerWidth <= 768) {
        carouselRef.current.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };
  
  const handleNext = () => {
    if (carouselRef.current) {
      if (window.innerWidth <= 768) {
        carouselRef.current.scrollBy({ top: scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };
  

  return (
    <div className="carousel-section">
        <div className="carousel-section-title">
            <h2>DISCOVER OUR SERVICES</h2>
            <hr />
        </div>
      <div className="carousel-container">
        <button className="arrow-button horizontal" onClick={handleNext}>
          ▶
        </button>
        <button className="arrow-button vertical" onClick={handlePrev}>
        ▲
        </button>
        <div className="carousel" ref={carouselRef}>
          {services.map((service, i) => (
            <div className="carousel-service-card" key={i}>
              <img src={service.image} alt={service.name} className="carousel-service-image" />
              <h3 className="carousel-service-name">{service.name}</h3>
              <p className="carousel-service-description">{service.description}</p>
            </div>
          ))}
        </div>
        <button className="arrow-button horizontal" onClick={handlePrev}>
        ◀
        </button>
        <button className="arrow-button vertical" onClick={handleNext}>
        ▼
        </button>
      </div>
    </div>
  );
};

export default ServicesCarousel;
