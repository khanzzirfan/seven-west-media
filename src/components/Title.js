import React from 'react';
import styled from 'styled-components';

const marginLeft = 10;
const fontSize = 20;

const Title = styled.h2`
    color: white;
    margin: 0 0 0 ${marginLeft}px;
    font-size: ${fontSize}px;
    font-family: Roboto, sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

export default Title;