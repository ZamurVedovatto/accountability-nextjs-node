import React from 'react'
import BankMain from './../layout/pages/BankMain.tsx'
import styled from 'styled-components'

const BankMainWrapper = styled.div`
  min-height: calc(100vh - 42px);
`

function bank() {
  return (
    <BankMainWrapper>
      <BankMain smallSize={false} />
    </BankMainWrapper>
  )
}

export default bank
