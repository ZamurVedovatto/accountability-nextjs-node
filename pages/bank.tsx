import React from 'react'
import BankMain from './../layout/pages/BankMain.tsx'
import { PageContentWrapper } from './../styles/utils/PageContentStyles'

function bank() {
  return (
    <PageContentWrapper>
      <BankMain smallSize={false} />
    </PageContentWrapper>
  )
}

export default bank
