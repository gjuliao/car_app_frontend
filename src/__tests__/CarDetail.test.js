import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import CarDetail from '../pages/CarDetail';

describe('CarDetail page', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <CarDetail />
        </BrowserRouter>
      </Provider>,
    );
  });

  test('Show a message when the user is not logged in', () => {
    expect(screen.getByText('You need to be logged in to reserve a car')).toBeDefined();
  });

  test('AddCar renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <CarDetail />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
