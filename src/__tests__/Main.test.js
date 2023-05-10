/* eslint-disable react/display-name */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Main from '../components/Main';

jest.mock('../styles/Main.module.css', () => require('identity-obj-proxy'));
jest.mock('../styles/Footer.module.css', () => ({
  footer: 'mocked-footer',
}));
jest.mock('../components/ProductSlider', () => () => <div>Mocked ProductSlider</div>);

describe('Main component tests', () => {
  it('renders the Main component', () => {
    render(<Main />);
    // No assertions needed for rendering the component successfully
  });

  it('displays the "Latest Models" heading', () => {
    const { getByText } = render(<Main />);
    const headingElement = getByText('Latest Models');
    expect(headingElement).toBeInTheDocument();
  });

  it('displays the "Please select a car model" text', () => {
    const { getByText } = render(<Main />);
    const textElement = getByText('Please select a car model');
    expect(textElement).toBeInTheDocument();
  });

  // Add more tests for other components or functionalities within the Main component
});
