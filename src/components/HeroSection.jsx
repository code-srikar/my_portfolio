// src/components/HeroSection.jsx

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';
import styled from 'styled-components';

// Import your profile image
import profilePic from '../assets/images/profile-pic2.png';

const StyledHeroSection = styled.section`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #1a1a1a; /* Dark background */
    color: #fff; /* Light text color */
    background-image: linear-gradient(135deg, #2980b9, #2c3e50); /* Gradient background */
    background-size: cover;
    background-position: center;
    position: relative;
`;

const HeroContent = styled.div`
    z-index: 1;
`;

const HeroImage = styled.img`
    width: 200px; /* Adjust size as needed */
    height: 200px;
    border-radius: 50%;
    margin-bottom: 2rem;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Shadow for depth */
`;

const HeroTitle = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
`;

const HeroSubtitle = styled.p`
    font-size: 1.5rem;
    margin-bottom: 2rem;
`;

const HeroButton = styled(Button)`
    background-color: #f39c12; /* Orange background */
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    text-transform: uppercase;

    &:hover {
        background-color: #e67e22; /* Darker orange on hover */
    }
`;

const HeroSection = () => {
    return (
        <StyledHeroSection id="hero">
            <Container>
                <HeroContent>
                    <HeroImage src={profilePic} alt="Profile Picture" />
                    <HeroTitle>Welcome to My Portfolio</HeroTitle>
                    <HeroSubtitle>I'm Srikar, a Full Stack Developer</HeroSubtitle>
                    <Link to="projects" smooth={true}>
                        <HeroButton variant="primary">View Projects</HeroButton>
                    </Link>
                </HeroContent>
            </Container>
        </StyledHeroSection>
    );
};

export default HeroSection;
