import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import AddCar from '../pages/AddCar';

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
