import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from './Image';
import Title from './Title';

const overlayViewHeight = 51;
const OverlayView = styled.div`
    display:flex;
    align-self: flex-end;
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: ${overlayViewHeight}px;
`;

const Overlay = ({ iconAlt, iconImage, ImageElement, TitleElement, title }) => (
    <OverlayView>
        <ImageElement src={iconImage} alt={iconAlt} />
        <TitleElement>{title}</TitleElement>
    </OverlayView>
);

Overlay.defaultProps = {
    iconAlt: '',
    iconImage: null,
    ImageElement: Image,
    TitleElement: Title,
    title: '',
};

Overlay.propTypes = {
    iconAlt: PropTypes.string,
    iconImage: PropTypes.node,
    ImageElement: PropTypes.func,
    TitleElement: PropTypes.func,
    title: PropTypes.string,
};

export default Overlay;