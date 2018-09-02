import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import Overlay from '../Overlay';
import Image from '../Image';
import Title from '../Title';
import logoImage from '../../assets/logo.png';

describe('components -> Overlay component', () => {
    let instance;
    let testRenderer;

    beforeAll(() => {
        testRenderer = TestRenderer.create(<Overlay
            iconAlt={"media alt"}
            iconImage={logoImage}
            ImageElement={Image}
            TitleElement={Title}
            title={"Home and Away"}
        />);
        instance = testRenderer.root;
    });

    it('should renders correctly and match to snapshot', () => {
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });

    it("should pass props to image component", () => {
        const iconAlt = "media alt";
        const title = "Home and Away";
        expect(instance.findByType(Image).props.src).toBe(logoImage);
        expect(instance.findByType(Image).props.alt).toBe(iconAlt);
    })

    it('should pass props to Title component correctly', () => {
        const iconAlt = "media alt";
        const title = "Home and Away";
        expect(instance.findByType(Title).props.children).toBe(title);
    });

    it('should render different image component', () => {
        const iconAlt = "media alt2";
        const title = "Home and Away2";
        const customComponent = () => <div />;

        const testRendererComponent = TestRenderer.create(<Overlay
            iconAlt={"media alt2"}
            iconImage={logoImage}
            ImageElement={customComponent}
            TitleElement={Title}
            title={"Home and Away2"}
        />).root;

        expect(testRendererComponent.findByType(customComponent).props.src).toBe(logoImage);
        expect(testRendererComponent.findByType(customComponent).props.alt).toBe(iconAlt);
    });

    it('should render different title component', () => {
        const iconAlt = "media alt2";
        const title = "Home and Away2";
        const customComponent = () => <div />;

        const testRendererComponent = TestRenderer.create(<Overlay
            iconAlt={"media alt2"}
            iconImage={logoImage}
            ImageElement={Image}
            TitleElement={customComponent}
            title={"Home and Away2"}
        />).root;

        expect(testRendererComponent.findByType(customComponent).props.children).toBe(title);
    });
});