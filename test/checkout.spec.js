import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

import Checkout from '../src';

// https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md
// https://github.com/bokuweb/react-rnd/blob/master/test/resizable-and-movable.spec.js
// https://github.com/lelandrichardson/enzyme-example-mocha/blob/master/test/Foo-test.js
// 
// ## Form Inputs
// - first_name
// - last_name
// - exp_month
// - exp_year
// - cvc
// - address_zip
// - country
// - submit
// 
// ## Form Elements
// - form-superscript-right
// - form-disclaimer

describe('<Checkout />', () => {
  
  it('should have a wrapper with the right className', () => {
    const wrap = shallow(<Checkout />);
    expect(
      wrap.is('.axis-checkout')
    ).to.equal(true);
  });

  it('should have a warpper with the right className (alt)', () => {
    const wrap = shallow(<Checkout />);
    expect(
      wrap.hasClass('axis-checkout')
    ).to.equal(true)
  });

});