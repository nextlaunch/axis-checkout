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
// - card_number
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

test('is a warpper with the right className', t => {
  t.is(wrap.hasClass('axis-checkout'), true)
})

test('contains a form element', t => {
  t.is(wrap.childAt(0).type(), 'form')
})

// name
test('contains .first-name', t => {
  t.is(wrap.find('.first-name').type(), 'label')
})

test('contains .last-name', t => {
  t.is(wrap.find('.last-name').type(), 'label')
})

test('contains an input for first name', t => {
  t.is(wrap.find('input[name="first-name"]').type(), 'input')
})

// card number
test('contains an input for card number with stripe attribute', t => {
  const input = wrap.find('input[name="card-number"]')
  t.is(input.type(), 'input')
  t.is(input.prop('data-stripe'), 'number')
})

// exp month
test('contains an expiration month with a stripe attribute', t => {
  const select = wrap.find('select[name="exp-month"]')
  t.is(select.type(), 'select')
  t.is(select.prop('data-stripe'), 'exp_month')
})

// exp year
test('contains an expiration year with a stripe attribute', t => {
  const select = wrap.find('select[name="exp-year"]')
  t.is(select.type(), 'select')
  t.is(select.prop('data-stripe'), 'exp_year')
})

// cvc
test('contains a security cvc code with a stripe attribute', t => {
  const input = wrap.find('input[name="cvc-code"]')
  t.is(input.type(), 'input')
  t.is(input.prop('data-stripe'), 'cvc')
})

// zip code
test('contains a zip code with a stripe attribute', t => {
  const input = wrap.find('input[name="zip-code"]')
  t.is(input.type(), 'input')
  t.is(input.prop('data-stripe'), 'address_zip')
})

// country
test('contains a country select', t => {
  const select = wrap.find('select[name="country"]')
  t.is(select.type(), 'select')
})

// confirm button
test('contains a confirm button', t => {
  const button = wrap.find('.btn')
  t.is(button.type(), 'button')
  t.is(button.text(), 'Submit')
})









