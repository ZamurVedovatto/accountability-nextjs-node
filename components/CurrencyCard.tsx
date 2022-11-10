import React from 'react'

const signTypes = {
  dolar: '$',
  euro: 'eu',
  cdi: 'cd',
}

const CurrencyCard = ({curKey, curVal}) => {
  
  return (
    <div className="currency-card">
      <span>{curKey}</span>
      <p>{curVal}</p>
    </div>
  )
}

export default CurrencyCard