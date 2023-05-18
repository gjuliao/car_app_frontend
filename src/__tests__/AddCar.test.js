import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import AddCar from '../pages/AddCar';

describe('AddCar page tets', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddCar />
        </BrowserRouter>
      </Provider>,
    );
  });

  test('display create button', () => {
    expect(screen.getByText('Create')).toBeDefined();
  });

  test('Create button should be disabled', () => {
    expect(screen.getByText('Create')).toBeDisabled();
  });

  test('AddCar renders without crashing', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <AddCar />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
