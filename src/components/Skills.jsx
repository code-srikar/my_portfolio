// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';

const SkillsContainer = styled.section`
  padding: 5rem 2rem;
  background: #fff;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  justify-items: center;
  align-items: center;
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #282c34;
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const skillsData = [
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' }
];

const Skills = () => {
    return (
        <SkillsContainer id="skills">
            <h2>My Skills</h2>
            <SkillsGrid>
                {skillsData.map((skill, index) => (
                    <SkillItem
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <SkillIcon>{skill.icon}</SkillIcon>
                        <h3>{skill.name}</h3>
                    </SkillItem>
                ))}
            </SkillsGrid>
        </SkillsContainer>
    );
};

export default Skills;
