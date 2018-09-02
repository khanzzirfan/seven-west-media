import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import Image from '../Image';

describe('components -> Image component', () => {
    it('should renders correctly', () => {
        const wrapper = TestRenderer.create(<Image src="media.png" alt="media image alt" />).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});