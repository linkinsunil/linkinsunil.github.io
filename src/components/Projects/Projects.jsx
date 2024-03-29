import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import { projectsData } from './../../assets/projectsData';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  return (
    <div className='section-container'>
      <Header
        heading='My Projects.'
        details="Here are a few cool things I've worked on, do check them out!"
        projectCount={projectsData.length}
      />

      <div className='project-cards-container'>
        {projectsData.map(
          ({ projectName, projectDescription, imageUrl, projectUrl }) => {
            return (
              <ProjectCard
                key={projectName}
                projectName={projectName}
                projectDescription={projectDescription}
                projectUrl={projectUrl}
                imageUrl={imageUrl}
              />
            );
          }
        )}
      </div>

      <FooterLink phrase='Check out ' link='my skills!' toAdress='/skills' />
    </div>
  );
};

export default Projects;
