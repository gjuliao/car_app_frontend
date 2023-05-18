import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';
import store from '../redux/store';

test('Navbar renders without crashing', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
