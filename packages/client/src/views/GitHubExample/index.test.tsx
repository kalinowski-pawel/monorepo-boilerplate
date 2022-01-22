import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import store from '../../store';
import GitHubExample from './index';

test('render components with button to fetch users', () => {
  const { getByText, debug } = render(
    <Provider store={store}>
      <GitHubExample />
    </Provider>);

  // Example debug for displaying what is inside current test, feel free to remove it :)
  debug();
  expect(getByText('Fetch users')).toBeInTheDocument();
});
