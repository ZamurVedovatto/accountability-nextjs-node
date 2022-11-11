import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import styled from 'styled-components'
import CurrencyCard from './CurrencyCard'

const CurrencyConversionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  padding: 1rem;
  .currency-card {
    display: flex;
    flex: 1;
    padding: 0.25rem;
    border: 1px solid lightgrey;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    span {
      color: #80808075;
      font-size: 0.75rem;
    }
    p {
      font-weight: bold;
      margin: 2px 0;
      color: chocolate;
    }
  }
`

const curFakeData = [
  {
    key: 'dolar',
    val: '5.15',
  },
  {
    key: 'euro',
    val: '5.12',
  },
  {
    key: 'cdi',
    val: '13.75',
  },
]

const CurrencyConversion = () => {
  const [dolarToReal, setDolarToReal] = useState(5.15)
  const [euroToReal, setEuroToReal] = useState(5.11)
  const [CDI, setCDI] = useState(13.75)
  const [currenciesData, setCurrenciesData] = curFakeData

  return (
    <CurrencyConversionWrapper>
      {/* {
        curFakeData.map((cur) => {
          <CurrencyCard key={cur.key} curKey={cur.key} curVal={cur.val} />
        })
      } */}

      <div className="currency-card">
        <span>Dólar</span>
        <p>${dolarToReal}</p>
      </div>
      <div className="currency-card">
        <span>Euro</span>
        <p>€{euroToReal}</p>
      </div>
      <div className="currency-card">
        <span>CDI</span>
        <p>{CDI}%</p>
      </div>
    </CurrencyConversionWrapper>
  )
}

export default CurrencyConversion
