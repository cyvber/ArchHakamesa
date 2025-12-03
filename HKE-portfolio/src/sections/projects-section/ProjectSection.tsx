import React from 'react';
import './ProjectSection.css';
import { projects } from '../../assets/data/projects';
import ProjectComposition from '../../components/project-composition/ProjectComposition';
import abouts from '../../assets/data/abouts';


const ProjectSection: React.FC = () => {
  const latestProjects = [...projects]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 3);

  return (
    <div className="project-section-container">
        <section className="project-section">
            <div className="project-section-title-container">
                <h1 className="project-section-title">פרויקטים</h1>
                <hr />
            </div>
            <div className="project-section-description">
                <h2>{abouts.projects}</h2>
            </div>
        {latestProjects.map((project, index) => (
            <ProjectComposition
            key={index}
            project={project}
            reverse={index % 2 !== 0}
            />
        ))}
        </section>
    </div>
  );
};

export default ProjectSection;
