import React from 'react';
import A from './a';
import { shallow } from 'enzyme';

describe('A component', () => {
  test('renders', () => {
    shallow(
      <A />
    );
  });
});