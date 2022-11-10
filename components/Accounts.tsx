import React from 'react'
import styled from 'styled-components'

const AccountsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  padding: 1rem;
  .account-card {
    width: 100%;
    display: flex;
    span {
      padding: .25rem;
      border: 1px solid lightgrey;
      color: #80808075;
      font-size: .75rem;
      width: 25%;
    }
  }
`


const Accounts = () => {
  return (
    <AccountsWrapper>
      <div className="account-card">
        <span>cd cdb</span>
        <span>R$16.844,16</span>
        <span>R$193,01</span>
        <span>33,79%</span>
      </div>

      <div className="account-card">
        <span>cd cdb</span>
        <span>R$16.844,16</span>
        <span>R$193,01</span>
        <span>33,79%</span>
      </div>

      <div className="account-card">
        <span>cd cdb</span>
        <span>R$16.844,16</span>
        <span>R$193,01</span>
        <span>33,79%</span>
      </div>

      <div className="account-card">
        <span>cd cdb</span>
        <span>R$16.844,16</span>
        <span>R$193,01</span>
        <span>33,79%</span>
      </div>

      <div className="account-card">
        <span>cd cdb</span>
        <span>R$16.844,16</span>
        <span>R$193,01</span>
        <span>33,79%</span>
      </div>
    </AccountsWrapper>
  )
}

export default Accounts