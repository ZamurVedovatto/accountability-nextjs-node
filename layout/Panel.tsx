import React from 'react'
// import CurrencyConverter from './../utils/CurrencyConverter'
import CurrencyConversion from './../components/CurrencyConversion'
import IncomeOutcome from './../components/IncomeOutcome'
import BankMain from './pages/BankMain'

const Panel = () => {
  return (
    <div>
      <CurrencyConversion />
      <BankMain smallSize={true} />
      <IncomeOutcome />
    </div>
  )
}

export default Panel
