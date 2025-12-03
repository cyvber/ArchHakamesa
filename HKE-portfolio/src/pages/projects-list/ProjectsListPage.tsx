import './ProjectsListPage.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Define the Project type
interface Project {
  _id: string;
  title: string;
  description: string;
  images: string[];
  date: string;
}

const ProjectsListPage: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch projects from the backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/projects`); // make sure CORS is enabled
        setProjects(res.data);
      } catch (err: any) {
        console.error(err);
        setError('Failed to load projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleProjectClick = (id: string) => {
    navigate(`/projects/${id}`);
  };

  if (loading) return <p className="loading">Loading projects...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="projects-container" id="projects">
      <div className="projects-grid">
        {projects.map((project) => (
          <div
            key={project._id}
            className="project-card"
            onClick={() => handleProjectClick(project._id)}
          >
            {project.images[0] && (
              <img
                src={project.images[0]}
                alt={project.title}
                loading="lazy"
                className="project-image fade-in"
              />
            )}
            <div className="project-overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsListPage;
