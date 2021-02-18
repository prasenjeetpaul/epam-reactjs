import React from 'react';
import { screen, render, cleanup } from '@testing-library/react'
import App from '../components/App'

describe('App Component', () => {
    beforeAll(() => {
        render(<App />)
    })

    it('should have the right message in the dom', () => {
        const message = 'EPAM React JS Global Mentoring Program';
        expect(screen.getByText(message)).toBeInTheDocument()
    })

    afterAll(cleanup)
})
