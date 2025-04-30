import React, { useState, useRef } from 'react';
import './ProjectGallery.css';

interface ProjectGalleryProps {
  images: string[];
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const thumbnailsRef = useRef<(HTMLImageElement | null)[]>([]);

  const handleThumbnailClick = (img: string, index: number) => {
    setSelectedImage(img);
    const thumbnailElement = thumbnailsRef.current[index];
    if (thumbnailElement) {
      thumbnailElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  };

  return (
    <div className="project-gallery">
      <div className="selected-image-container">
        <img src={selectedImage} alt="Selected" className="selected-image" />
      </div>
      <div className="thumbnails-container">
        {images.map((img, index) => (
          <img
          key={index}
          ref={(el) => { thumbnailsRef.current[index] = el; }}
          src={img}
          alt={`Thumbnail ${index + 1}`}
          className={`thumbnail ${img === selectedImage ? 'active' : ''} fade-in`}
          onClick={() => handleThumbnailClick(img, index)}
          loading='lazy'
        />        
        ))}
      </div>
    </div>
  );
};

export default ProjectGallery;
