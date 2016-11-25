import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Checkout from '../src'
import test from 'ava'

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

let wrap

test.beforeEach(t => {
  wrap = shallow(<Checkout />)
})

test('should have a warpper with the right className (alt)', t => {
  t.is(wrap.hasClass('axis-checkout'), true)
})

test('should contain a form element', t => {
  t.is(wrap.childAt(0).type(), 'form')
})

test('contains first-name form-group', t => {
  const form = wrap.find('form')
  t.is(form.find('.form-group').hasClass('first-name'), true)
})

test('should contain a first-name input', t => {
  t.is(wrap.find('input[name="first-name"]').type(), 'input')
})
















