import React from 'react'
import { render } from 'react-dom'
import Checkout from '../src'
import RedBox from 'redbox-react'

const root = document.querySelector('.root')

try {
  render(<Checkout />, root)
} catch (e) {
  render(<RedBox error={e} />, root)
}