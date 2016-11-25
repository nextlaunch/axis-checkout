import React, { Component } from 'react'
import reactCSS from 'reactcss'

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
          <div className='form-group first-name'>
            <input 
              type='text' 
              className='form-control'
              name='first-name'
              placeholder='First Name' />
          </div>
        </form>
      </div>
    )
  }
}