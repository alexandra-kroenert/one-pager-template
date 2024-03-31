import React from 'react';
import styled from 'styled-components';

const StyledAbout = styled.section`
  background-color: #C57D75;
  color: #F7E9DE;
  padding: 2rem;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  p {
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;



const About = () => {
  return (
    <StyledAbout id="about">
      <p>About Content Here...</p>
    </StyledAbout>
  );
};

export default About;