import './ViewProjectPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectGallery from '../../components/project-gallery/ProjectGallery';

interface Project {
  _id: string;
  title: string;
  description: string;
  images: string[];
  date: string;
}

const ViewProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(res.data);
      } catch (err: any) {
        console.error(err);
        setError('Project not found');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProject();
  }, [id]);

  const handleDelete = async () => {
    if (!project) return;
    const confirmDelete = window.confirm('Are you sure you want to delete this project?');
    if (!confirmDelete) return;

    
    try {
      await axios.delete(`http://localhost:5000/api/projects/${project._id}`);
      alert('Project deleted successfully');
      navigate('/projects'); // Redirect to projects list
    } catch (err: any) {
      console.error(err);
      alert('Failed to delete project');
    } 
  };

  if (loading) return <div className="view-project-page">Loading...</div>;
  if (error || !project) return <div className="view-project-page">{error}</div>;

  return (
    <div className="view-project-page">
      <h1>{project.title}</h1>
      <p className="date">{new Date(project.date).toLocaleDateString()}</p>

      {project.images?.[0] && (
        <img
          src={project.images[0]}
          alt={project.title}
          className="project-full-image fade-in"
          loading="lazy"
        />
      )}

      <div className="project-description">
        <h2>Project Description</h2>
        <p>{project.description}</p>
      </div>

      <ProjectGallery images={project.images || []} />

      {/* Hidden delete button */}
      <div
        className="project-delete-button"
        onClick={handleDelete}
      >
        
      </div>
    </div>
  );
};

export default ViewProjectPage;
