import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 10px 15px;
  width: 30%;
  font-size: 16px;
  background-color: grey;
  color: white;
  border: 2px solid grey;
  border-radius: 2%;
  cursor: pointer;
  transition: color 250ms linear, background-color 250ms linear;

  &:hover {
    color: black;
    background-color: white;
  }
`;

export const Input = styled.input`
  margin-bottom: 20px;
  width: 80%;
  height: 30px;
  font-size: 20px;
  border:1px solid grey;
`;

export const Form = styled.form`
  padding: 20px;
  width: 500px;
  border: 5px solid grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size:20px;
  font-weight:bold;
  display: flex;
  flex-direction: column;
  margin-bottom:5px;
`;
