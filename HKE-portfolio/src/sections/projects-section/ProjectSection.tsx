import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProjectSection.css';
import ProjectComposition from '../../components/project-composition/ProjectComposition';
import abouts from '../../assets/data/abouts';

interface Project {
  _id: string;
  title: string;
  description: string;
  images: string[];
  date: string;
  createdAt: string;
  video?: string;
  land_size?: number;
  house_size?: number;
  build_duration?: string;
  floors?: number;
}

const ProjectSection: React.FC = () => {
  const [latestProjects, setLatestProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLatestProjects = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_SERVER_URL}/api/projects/latest`);
        setLatestProjects(res.data);
      } catch (err: any) {
        console.error(err);
        setError('שגיאה בטעינת הפרויקטים.');
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProjects();
  }, []);

  if (loading) return <div className="project-section-container">טוען...</div>;
  if (error) return <div className="project-section-container">{error}</div>;

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
            key={project._id}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>
    </div>
  );
};

export default ProjectSection;
