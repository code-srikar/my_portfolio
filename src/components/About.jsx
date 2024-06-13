// src/components/About.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  background: #f8f9fa;
`;

const AboutText = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const About = () => {
    return (
        <AboutContainer id="about">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                <h2>About Me</h2>
                <AboutText>
                    <p>Hello! I'm Srikar, a web developer with a passion for creating beautiful and functional web applications...</p>
                </AboutText>
            </motion.div>
        </AboutContainer>
    );
};

export default About;
