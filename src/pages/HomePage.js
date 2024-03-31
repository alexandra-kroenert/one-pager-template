import React from 'react';
import ScrollToTopButton from '../components/ScrollToTopButton.js';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #F7E9DE;
`;

const StyledHeading = styled.h1`
  color: #B54E4A;
  font-size: 2.5rem;
`;

const HomePage = () => {
  return (
    <StyledSection id="home">
      <StyledHeading>Welcome</StyledHeading>
      <ScrollToTopButton />
    </StyledSection>
  );
};

export default HomePage;
