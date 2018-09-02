import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const margin = 9;
const size = 38;

const Image = styled.img`
 margin-top:${margin}px;
 margin-left:${margin}px;
 width: ${size}px;
 height: ${size}px;
`;

export default Image;