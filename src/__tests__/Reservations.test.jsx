import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import store from '../redux/configureStore';
import '@testing-library/jest-dom/';
import Reservations from '../pages/Reservations';

describe('Reservations Page', () => {
  test('Should render the proper Reservations Page', () => {
    const reservationsPage = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Reservations />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(reservationsPage).toMatchSnapshot();
  });
});
