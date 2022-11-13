import React from 'react';
import { Label } from './PhoneBook.styled';
import PropTypes from 'prop-types';

export const LabelContact = ({ title, children }) => (
  <label>
    <Label>{title}</Label>
    {children}
  </label>
);

LabelContact.propTypes = {
  title: PropTypes.string,
};