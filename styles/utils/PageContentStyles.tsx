import styled from 'styled-components'

const breadcrumbHeight = '51px'

export const PageContentWrapper = styled.div`
  height: calc(100vh - ${breadcrumbHeight});
  min-height: calc(100vh - ${breadcrumbHeight});
  max-height: calc(100vh - ${breadcrumbHeight});
  width: 100%;
  background-color: #f8f9fa;
  overflow-x: hidden;
  overflow-y: auto;
`
