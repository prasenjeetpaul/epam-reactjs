import React from 'react'
import { render } from '@testing-library/react';
import { Footer } from './footer';

describe('Footer', () => {
    it('should match the snapshot after render', () => {
        const { asFragment } = render(<Footer />);
        expect(asFragment()).toMatchSnapshot();
    });
});