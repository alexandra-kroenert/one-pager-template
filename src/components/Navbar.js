import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';


const StyledNavbar = styled.nav`
  background-color: #34513A;
  color: #F7E9DE;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  a {
    color: #F7E9DE;
    text-decoration: none;
    margin: 0 1rem;
    &:hover {
      color: #ffbe98;
    }
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar id="navbar">
      <Link to="home" smooth={true} duration={1000}>Home</Link>
      <Link to="about" smooth={true} duration={1000}>About</Link>
      <Link to="work" smooth={true} duration={1000}>Work</Link>
      <Link to="contact" smooth={true} duration={1000}>Contact</Link>
    </StyledNavbar>
  );
};


export default Navbar;
