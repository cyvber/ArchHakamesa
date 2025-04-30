import './ViewProjectPage.css';
import { useParams } from 'react-router-dom';
import { projects } from '../../assets/data/projects';
import ProjectGallery from '../../components/project-gallery/ProjectGallery';

const ViewProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <div className="view-project-page">Project not found</div>;
  }

  return (
    <div className="view-project-page">
        <h1>{project.name}</h1>
        <p className='date'>{project.created_at}</p>
        <img 
            src={project.image} 
            alt={project.name} 
            className="project-full-image fade-in" 
            loading='lazy'
        />
        <div className="project-description">
            <h1>Project Description</h1>
            <p>{project.description}</p>
        </div>
        <ProjectGallery images={project.images_array} />
    </div>
  );
};

export default ViewProjectPage;
