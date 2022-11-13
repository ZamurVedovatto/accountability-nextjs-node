import React from 'react'
import Projections from './../layout/Projections.tsx'
import { PageContentWrapper } from './../styles/utils/PageContentStyles'

function Page() {
  return (
    <PageContentWrapper>
      <Projections smallSize={false} />
    </PageContentWrapper>
  )
}

export default Page
