import React from 'react';
import PropTypes from 'prop-types';
import { Form } from './PhoneBook.styled';

export const PhoneBook = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

PhoneBook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};