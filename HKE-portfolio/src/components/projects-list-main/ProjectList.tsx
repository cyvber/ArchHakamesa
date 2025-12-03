import './ProjectList.css';
import { projects } from '../../assets/data/projects';
import { useNavigate } from 'react-router-dom';
const ProjectList = () => {
    const navigate = useNavigate();

    const handleProjectClick = (id: number) => {
      navigate(`/projects/${id}`);
    };
  
    // Sort projects by created_at descending and get top 3
    const latestProjects = [...projects]
        .sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at))
        .slice(0, 3);

    return (
        <div className="project-list">
            <h2>Latest Projects</h2>
            <div className="project-cards-grid">
                {latestProjects.map((project) => (
                    <div key={project.id} className="project-card-main">
                        <div className="project-image-main">
                            <img src={project.image} alt={project.name} />
                            <div className="project-overlay-main">
                                <div className="overlay-main-content">
                                <p>שטח המגרש: {project.land_size} מ״ר</p>
                                <p>שטח בנוי: {project.house_size} מ״ר</p>
                                <p>מספר קומות: {project.floors}</p>
                                <p>שנת בניה: {project.build_duration}</p>
                                </div>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="project-title">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <button onClick={() => handleProjectClick(project.id)}>לך לפרויקט</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;