import React from 'react'
// import CurrencyConverter from './../utils/CurrencyConverter'
import CurrencyConversion from './../components/CurrencyConversion'
import BankMain from './pages/BankMain'

const Panel = () => {
  return (
    <div>
      <CurrencyConversion />
      <BankMain smallSize={true} />
    </div>
  )
}

export default Panel
