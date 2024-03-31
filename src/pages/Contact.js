// src/pages/Contact.js
import React from 'react';
import styled from 'styled-components';

const StyledContact = styled.section`
  background-color: #F7E9DE;
  color: #34513A;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #C57D75;
  border-radius: 5px;
  font-size: 1rem;
  color: #34513A;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 2px solid #C57D75;
  border-radius: 5px;
  font-size: 1rem;
  color: #34513A;
  resize: vertical; // Allows vertical resizing, consider limiting the height if needed
`;

const SubmitButton = styled.button`
  background-color: #B54E4A;
  color: #F7E9DE;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #C57D75;
  }
`;

const Contact = () => {
  return (
    <StyledContact id="contact">
      <h2>Contact Us</h2>
      <ContactForm>
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <TextArea rows="6" placeholder="Your Message"></TextArea>
        <SubmitButton type="submit">Send Message</SubmitButton>
      </ContactForm>
    </StyledContact>
  );
};

export default Contact;