import './ProjectList.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Project {
  _id: string;
  title: string;
  description: string;
  images: string[];
  land_size?: number;
  house_size?: number;
  build_duration?: string;
  floors?: number;
  date: string;
}

const ProjectList: React.FC = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleProjectClick = (id: string) => {
    navigate(`/projects/${id}`);
  };

  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/projects/latest`);
        setProjects(res.data);
      } catch (err: any) {
        console.error(err);
        setError('לא ניתן לטעון את הפרויקטים האחרונים');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProjects();
  }, []);

  if (loading) return <p>טוען פרויקטים...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="project-list">
      <h2>פרויקטים אחרונים</h2>
      <div className="project-cards-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card-main">
            <div className="project-image-main">
              {project.images[0] && <img src={project.images[0]} alt={project.title} />}
              <div className="project-overlay-main">
                <div className="overlay-main-content">
                  <p>שטח המגרש: {project.land_size ?? '-' } מ״ר</p>
                  <p>שטח בנוי: {project.house_size ?? '-' } מ״ר</p>
                  <p>מספר קומות: {project.floors ?? '-'}</p>
                  <p>משך בנייה: {project.build_duration ?? '-'}</p>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <button onClick={() => handleProjectClick(project._id)}>לך לפרויקט</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
