//this just simple example test on index.test.js

import React from 'react';
import { shallow } from 'enzyme';
import index from './index';
describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<index />);
    });
});


//read about this testing: https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8