import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

describe('SignIn Page', () => {
  it('it should be able to sing in', () => {
    const { debug } = render(<SignIn />);

    debug();
  });
});
