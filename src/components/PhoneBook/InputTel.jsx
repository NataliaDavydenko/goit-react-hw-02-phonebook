import React from 'react';
import { Input } from './PhoneBook.styled';
import PropTypes from 'prop-types';

export const InputTel = ({ onChange, value }) => (
  <Input
    type="tel"
    name="number"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    required
    placeholder="Enter your phone"
    onChange={onChange}
    value={value}
  />
);

InputTel.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};