import React from 'react'
import Strategies from './../layout/Strategies.tsx'
import styled from 'styled-components'

const StrategiesWrapper = styled.div`
  min-height: calc(100vh - 64px);
`

function Page() {
  return (
    <StrategiesWrapper>
      <Strategies smallSize={false} />
    </StrategiesWrapper>
  )
}

export default Page
