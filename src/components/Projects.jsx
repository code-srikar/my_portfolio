// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Import your project images correctly
import quizAppImg from '../assets/images/quizapp.png';
import quickBiteImg from '../assets/images/quickbite.png';
import portfolioImg from '../assets/images/portfolio.png';
import taskifyImg from '../assets/images/taskify.png';

const ProjectsContainer = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
  text-align: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.a)`
  display: block;
  text-decoration: none;
  color: inherit;
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const projectsData = [
  { title: 'My Portfolio', description: 'My portfolio, crafted with React JS, invites you into a visually captivating world inspired by gaming aesthetics. Navigate seamlessly through sections like Home, About, Skills, Projects, and Contact, enhanced with smooth scroll animations and interactive elements. The portfolio showcases my proficiency in various technologies through visually appealing displays of skills. Connect with me effortlessly via a user-friendly contact form. This portfolio not only demonstrates my technical expertise but also aims to provide visitors with an engaging and memorable experience.', pic: portfolioImg, link: 'https://msrikar-portfolio.netlify.app/' },
  { title: 'Quiz App', description: 'Built using React, our Quiz App dynamically generates computer science-related questions from a predefined dataset. Users can test their knowledge by selecting answers and receive instant feedback with visual cues for correct and incorrect responses. The app tracks scores and progress through a series of questions, providing a seamless user experience with interactive features. Enhance learning and engagement with our intuitive Quiz App, designed to challenge and educate users on various computer science topics.', pic: quizAppImg, link: 'https://s-quiz-app.netlify.app' },
  { title: 'QuickBite', description: "Built with React, our food delivery application revolutionizes how users experience ordering meals online. Utilizing React's powerful frontend capabilities, we crafted a seamless user interface that ensures intuitive navigation and real-time updates. From browsing diverse restaurant menus to placing orders securely, our application integrates robust features. Experience convenience at your fingertips with our React-powered food delivery app.", pic: quickBiteImg, link: 'https://s-quick-bite.netlify.app' },
  { title: 'Taskify', description: "Taskify is a sleek and interactive task management application designed to simplify organizing and tracking daily tasks. Built with React and styled using React Bootstrap and Framer Motion, it offers a modern, dark-themed interface with dynamic animations for an engaging user experience. The application includes secure user authentication and efficient backend integration with a RESTful API, enabling users to add, update, and manage tasks effortlessly. Deployed on Netlify and Render, Taskify ensures responsive performance across devices, making task management seamless and accessible anywhere.", pic: taskifyImg, link: 'https://s-taskify.netlify.app' },
];

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>My Projects</h2>
      <ProjectGrid>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            href={project.link}
            target="_blank"
          >
            <ProjectImage src={project.pic} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
