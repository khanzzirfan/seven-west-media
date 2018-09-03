import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Overlay from './Overlay';
import { media } from '../utils/styleUtils';

const cardItemWidth = 320;
const cardItemHeight = 178;
const tabletSize = 1.2;
const desktopSize = 1.4;

const CardItemView = styled.div`
    display: flex;
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: ${cardItemWidth}px;
    height: ${cardItemHeight}px;
    margin: 10px 0 0 10px;
    position: relative;
    float: left;

    ${media.desktop`
        width: ${cardItemWidth * desktopSize}px;
        height:${cardItemHeight * desktopSize}px;
    `}

    ${media.tablet`
        width: ${cardItemWidth * tabletSize}px;
        height:${cardItemHeight * tabletSize}px;
    `}

`;

const CardItem = ({ backgroundImage, iconImage, iconAlt, ImageElement, TitleElement, title }) => (
    <CardItemView backgroundImage={backgroundImage}>
        <Overlay iconAlt={iconAlt}
            iconImage={iconImage}
            ImageElement={ImageElement}
            TitleElement={TitleElement}
            title={title} />
    </CardItemView>
)

CardItem.propTypes = {
    backgroundImage: PropTypes.node,
    iconAlt: PropTypes.string,
    iconImage: PropTypes.node,
    ImageElement: PropTypes.func,
    TitleElement: PropTypes.func,
    title: PropTypes.string,
};


export default CardItem;