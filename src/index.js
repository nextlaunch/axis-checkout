import React, { Component } from 'react'
import _ from 'lodash'
import countries from './countries.json'
import './index.scss'

export default class Checkout extends Component {

  static defaultProps = {}

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='axis-checkout'>
        <form>
          <div className='form-group'>
            <label className='first-name'>
              <span>First Name</span>
              <input 
                name='first-name'
                type='text' 
                className='form-control'
                placeholder='First Name' />
            </label>
            <label className='last-name'>
              <span>Last Name</span>
              <input 
                name='last-name'
                type='text' 
                className='form-control'
                placeholder='Last Name' />
            </label>
          </div>
          <div className="form-group">
            <label className='card-number'>
              <span>Card Number</span>
              <input 
                name='card-number'
                type="text"
                className='form-control'
                placeholder='Card Number'
                size='20'
                data-stripe='number' />
            </label>
          </div>
          <div className='form-group'>
            <label className='exp-month'>
              <span>Expiration Month</span>
              <select 
                name='exp-month'
                type='text'
                className='form-control'
                data-stripe='exp_month'>
                {_.times(12, (i) => {
                  const month = i+1
                  return (
                    <option 
                      key={i}
                      value={month}>
                      {month}
                    </option>
                  )
                })}
              </select>
            </label>
            <label className='exp-year'>
              <span>Expiration Year</span>
              <select 
                name='exp-year'
                type='text'
                className='form-control'
                data-stripe='exp_year'>
                {_.times(10, (i) => {
                  const year = i+2016
                  return (
                    <option 
                      key={i}
                      value={year}>
                      {year}
                    </option>
                  )
                })}
              </select>
            </label>
            <label className='cvc'>
              <span>CVC</span>
              <input 
                name='cvc-code'
                type="text"
                className='form-control'
                size='2'
                data-stripe='cvc' />
            </label>
          </div>
          <div className='form-group'>
            <label className='zip-code'>
              <span>Billing Zip</span>
              <input
                name='zip-code'
                type='text'
                required
                className='form-control'
                data-stripe='address_zip' />
            </label>
            <label className='country'>
              <span>Country</span>
              <select
                name='country'>
                {countries.map((country, i) => {
                  return (
                    <option 
                      key={i}
                      value={country.code}>
                      {country.name}
                    </option>
                  )
                })}
              </select>
            </label>
          </div>
          <div className='form-group'>
            <button 
              type='submit' 
              className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}