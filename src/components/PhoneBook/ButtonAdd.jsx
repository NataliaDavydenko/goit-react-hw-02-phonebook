import React from 'react';
import { Button } from './PhoneBook.styled';
import PropTypes from 'prop-types';

export const ButtonAdd = ({ text }) => <Button type="submit">{text}</Button>;

ButtonAdd.propTypes = {
  text: PropTypes.string.isRequired,
};