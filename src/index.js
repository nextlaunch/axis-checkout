import React, { Component } from 'react'
import reactCSS from 'reactcss'
import _ from 'lodash'

export default class Checkout extends Component {

  static defaultProps = {};

  constructor(props) {
    super(props)
    this.styles = this.styles.bind(this)
  }

  styles(props) {
    return reactCSS({
      'default': {
        form: {
          display: 'inline-block'
        },
        form_first_name: {
          border: '1px solid green'
        }
      }
    })
  }

  render() {
    const styles = this.styles(this.props)

    return (
      <div className='axis-checkout'>
        <form style={styles.form}>
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
          </div>
        </form>
      </div>
    )
  }
}