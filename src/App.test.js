import React from 'react';
import { render } from '@testing-library/react';
import Login from './pages/Login';


test('renders learn react link', () => {
  const { getByText } = render(

    <Login />

  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
