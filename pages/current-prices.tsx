import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  min-height: calc(100vh - 64px);
`

function Page() {
  return <PageWrapper>current-prices</PageWrapper>
}

export default Page
