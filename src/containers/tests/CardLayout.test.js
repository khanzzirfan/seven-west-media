import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import CardLayout from '../CardLayout';
import CardItem from '../../components/CardItem';
import backgroundImage from '../../assets/tile.jpg';
import logoImage from '../../assets/logo.png';

describe('components -> CardLayout component', () => {
    let instance;
    let testRenderer;

    beforeAll(() => {
        testRenderer = TestRenderer.create(
            <CardLayout data={stubData} />);
        instance = testRenderer.root;
    });

    it('should renders correctly and match to snapshot', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });

    it('should renders 2 card items part of card layout', () => {
        const cardItemElements = instance.findAllByType(CardItem);
        expect(cardItemElements.length).toBe(2);
    });

    it('should pass array data as props card layout', () => {
        const data = instance.props.data;
        expect(data.length).toBe(2);
        expect(data).toEqual(stubData);
    });
});


//sample data;
const stubData = [
    {
        iconAlt: 'Seven West Media',
        iconImage: logoImage,
        backgroundImage: backgroundImage,
        title: 'Home and Away',
    },
    {
        iconAlt: 'Seven West Media',
        iconImage: logoImage,
        backgroundImage: backgroundImage,
        title: 'Home and Away',
    },
];