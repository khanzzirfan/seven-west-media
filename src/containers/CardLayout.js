import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardItem from '../components/CardItem';
import Image from '../components/Image';
import Title from '../components/Title';

const CardView = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 5;
    padding: 5;
    
`;

const CardLayout = ({ data }) => (
    <CardView>
        {data.map((item, index) => (
            <CardItem key={index} 
                backgroundImage={item.backgroundImage}
                iconAlt={item.iconAlt}
                iconImage={item.iconImage}
                ImageElement={Image}
                TitleElement={Title}
                title={item.title}
            />
        ))}

    </CardView>
);


CardLayout.propTypes = {
    data: PropTypes.array,
};

export default CardLayout;