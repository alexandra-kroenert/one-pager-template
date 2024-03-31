// src/pages/Work.js
import React from 'react';
import styled from 'styled-components';

const StyledWork = styled.section`
  background-color: #ffbe98;
  color: #34513A;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #C57D75;
  }
`;

const Work = () => {
  return (
    <StyledWork id="work">
      <h2>My Work</h2>
      {/* Insert content about your work or portfolio here */}
    </StyledWork>
  );
};

export default Work;
