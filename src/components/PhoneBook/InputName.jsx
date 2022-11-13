import React from 'react';
import { Input } from './PhoneBook.styled';
import PropTypes from 'prop-types';

export const InputName = ({ onChange, value }) => (
  <Input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    placeholder="Enter your name"
    onChange={onChange}
    value={value}
  />
);

InputName.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};