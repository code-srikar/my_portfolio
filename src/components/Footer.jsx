// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem 2rem;
  background: #333;
  color: white;
  text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        </FooterContainer>
    );
};

export default Footer;
