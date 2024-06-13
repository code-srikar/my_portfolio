// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactContainer = styled.section`
  padding: 5rem 2rem;
  background: #282c34;
  color: white;
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const IconLink = styled(motion.a)`
  font-size: 2rem;
  color: white;
  &:hover {
    color: #f39c12;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  color: black;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <h2>Contact Me</h2>
            <ContactForm>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Send</button>
            </ContactForm>
            <SocialIcons>
                <IconLink href="https://www.linkedin.com/in/srikar-marikanti-120191285" target="_blank" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <FaLinkedin />
                </IconLink>
                <IconLink href="https://github.com/code-srikar" target="_blank" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <FaGithub />
                </IconLink>
                <IconLink href="https://x.com/Srikar_004?t=o0ZbDqbh0M-mcZrK5WUlhg&s=09" target="_blank" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                    <FaTwitter />
                </IconLink>
            </SocialIcons>
        </ContactContainer>
    );
};

export default Contact;
