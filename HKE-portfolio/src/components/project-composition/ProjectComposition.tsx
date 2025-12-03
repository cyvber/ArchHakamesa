import React from 'react';
import './ProjectComposition.css';
import watermark from '../../assets/logo/building-outline-black-trns.png';
import { useNavigate } from 'react-router-dom';


interface Project {
    id: number;
  name: string;
  description: string;
  image: string;
  land_size: number;
  house_size: number;
  build_duration: string;
  floors: number;
}

interface ProjectCompositionProps {
  project: Project;
  reverse?: boolean;
}

const ProjectComposition: React.FC<ProjectCompositionProps> = ({ project, reverse }) => {
    const navigate = useNavigate();

    const handleProjectClick = (id: number) => {
      navigate(`/projects/${id}`);
    };
  
  return (
    <div className={`project-composition ${reverse ? 'reverse' : ''}`}>
      <div className="project-text">
        <h2 className="project-name">{project.name}</h2>
        <p className="project-description">{project.description}</p>
        <button onClick={() => handleProjectClick(project.id)}>לך לפרויקט</button>
        <img src={watermark} alt="" className="watermark" />
      </div>
      <div className="project-image">
        <img src={project.image} alt={project.name} />
        <div className="project-overlay-container">
                                <div className="project-overlay-content">
                                <p>שטח המגרש: {project.land_size} מ״ר</p>
                                <p>שטח בנוי: {project.house_size} מ״ר</p>
                                <p>מספר קומות: {project.floors}</p>
                                <p>שנת בניה: {project.build_duration}</p>
                                </div>
                            </div>
      </div>
    </div>
  );
};

export default ProjectComposition;
