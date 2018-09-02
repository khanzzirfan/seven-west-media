import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import CardItem from '../CardItem';

import Overlay from '../Overlay';
import Image from '../Image';
import Title from '../Title';
import logoImage from '../../assets/logo.png';
import backgroundImage from '../../assets/tile.jpg';

describe('components -> CardItem component ', () => {
    let instance;
    let testRenderer;

    beforeAll(() => {
        testRenderer = TestRenderer.create(
            <CardItem
                backgroundImage={backgroundImage}
                iconAlt={"media alt"}
                iconImage={logoImage}
                ImageElement={Image}
                TitleElement={Title}
                title={"Home and Away"}

            />
        );
        instance = testRenderer.root;
    });

    it('should render correctly and match to snapshot', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });

    it("should pass props as background image to card item", () => {
        expect(instance.props.backgroundImage).toBe(backgroundImage);
    });

    it("should render overlay component as a part of card item", () => {
        const iconAlt = "media alt";
        const title = "Home and Away";
        expect(instance.findByType(Overlay).props.iconAlt).toBe(iconAlt);
        expect(instance.findByType(Overlay).props.title).toBe(title);
    });

});