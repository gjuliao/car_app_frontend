import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import CarDetail from '../pages/CarDetail';

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
