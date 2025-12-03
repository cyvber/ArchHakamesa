import React from 'react';
import './ProjectComposition.css';
import watermark from '../../assets/logo/building-outline-black-trns.png';
import { useNavigate } from 'react-router-dom';

interface Project {
  _id: string;
  title: string;
  description: string;
  images: string[];
  land_size?: number;
  house_size?: number;
  build_duration?: string;
  floors?: number;
}

interface ProjectCompositionProps {
  project: Project;
  reverse?: boolean;
}

const ProjectComposition: React.FC<ProjectCompositionProps> = ({ project, reverse }) => {
  const navigate = useNavigate();

  const handleProjectClick = (_id: string) => {
    navigate(`/projects/${_id}`);
  };

  return (
    <div className={`project-composition ${reverse ? 'reverse' : ''}`}>
      <div className="project-text">
        <h2 className="project-name">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <button onClick={() => handleProjectClick(project._id)}>לך לפרויקט</button>
        <img src={watermark} alt="" className="watermark" />
      </div>
      <div className="project-image">
        {project.images[0] && <img src={project.images[0]} alt={project.title} />}
        <div className="project-overlay-container">
          <div className="project-overlay-content">
            <p>שטח המגרש: {project.land_size || '-'} מ״ר</p>
            <p>שטח בנוי: {project.house_size || '-'} מ״ר</p>
            <p>מספר קומות: {project.floors || '-'}</p>
            <p>משך בניה: {project.build_duration || '-'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectComposition;
