import './ProjectsListPage.css';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../assets/data/projects';

const ProjectsListPage = () => {
  const navigate = useNavigate();

  const handleProjectClick = (id: number) => {
    navigate(`/projects/${id}`);
  };

  return (
    <div className="projects-container" id="projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project.id)}
          >
            <img
              src={project.image}
              alt={project.name}
              loading="lazy"
              className="project-image fade-in"
            />
            <div className="project-overlay">
              <h3>{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsListPage;
