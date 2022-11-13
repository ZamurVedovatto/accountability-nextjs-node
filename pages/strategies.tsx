import React from 'react'
import Strategies from './../layout/Strategies.tsx'
import styled from 'styled-components'
import { PageContentWrapper } from './../styles/utils/PageContentStyles'

function Page() {
  return (
    <PageContentWrapper>
      <Strategies smallSize={false} />
    </PageContentWrapper>
  )
}

export default Page
