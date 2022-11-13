import styled from 'styled-components';

export const Contacts = styled.ol`
  padding: 0px;
  margin: 0px;
`;

export const ContactItem = styled.li`
  align-items: baseline;
  display: flex;
`;

export const ContactText = styled.p`
  font-size: 24px;
  margin: 0 30px 20px 0;
`;

export const Button = styled.button`
  padding: 5px 7px;
  width: 20%;
  font-size: 14px;
  background-color: black;
  color: white;
  border: 2px solid black;
  border-radius: 2%;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    color: black;
    background-color: white;
  }
`;
