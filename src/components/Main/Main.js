import React from 'react';
import { MainPage } from './Main.styled';
import PropTypes from 'prop-types';

export const Main = ({ title, children }) => (
  <MainPage>
    <h1>{title}</h1>
    {children}
  </MainPage>
);

Main.propTypes = {
  title: PropTypes.string.isRequired,
};