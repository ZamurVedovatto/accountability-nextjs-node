import React from 'react'
import Projections from './../layout/Projections.tsx'
import styled from 'styled-components'

const ProjectionsWrapper = styled.div`
  min-height: calc(100vh - 64px);
`

function Page() {
  return (
    <ProjectionsWrapper>
      <Projections smallSize={false} />
    </ProjectionsWrapper>
  )
}

export default Page
