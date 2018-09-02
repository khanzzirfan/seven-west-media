import React from 'react';
import TestRenderer from 'react-test-renderer';
import 'jest-styled-components';

import Title from '../Title';

describe('components -> Title component', () => {
    it('should renders correctly', () => {
        const wrapper = TestRenderer.create(<Title>Media title</Title>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});