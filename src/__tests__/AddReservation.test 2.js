import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Reservation from '../components/Reservation';
import store from '../redux/store';

describe('It displays the Reservation page title', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <Router>
          <Reservation />
        </Router>
      </Provider>,
    );
  });
  test('Reservation title', () => {
    expect(screen.getByText('Reserve Latest Model Cars')).toBeDefined();
  });
});

test('Reservation page renders without crashing', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Reservation />
      </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
