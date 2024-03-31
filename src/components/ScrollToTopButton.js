// src/components/ScrollToTopButton.js
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Styled component for the button
const Button = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background-color: #C57D75; /* Adjust color based on your design */
  color: #F7E9DE;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px; /* Adjust size as needed */
  z-index: 1000; /* Ensure it's above other content */
  
  &:hover {
    background-color: #B54E4A; /* Slightly darker on hover */
  }
  display: none; /* Initially hidden */
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to detect scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button onClick={scrollToTop} style={{ display: isVisible ? 'flex' : 'none' }}>
      ↑
    </Button>
  );
};

export default ScrollToTopButton;
