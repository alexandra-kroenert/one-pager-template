import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #C57D75;
  color: #F7E9DE;
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;

  p {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <StyledFooter id="footer">
     <p>Amber Truth 1234 Truth Alley Great City 123</p>
      <p>© Alexandra Kroenert 2024</p>
    </StyledFooter>
  );
};

export default Footer;
