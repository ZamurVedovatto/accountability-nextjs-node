import React from 'react'
import TableExample from './../../layout/pages/TableExample.tsx'
import styled from 'styled-components'

const TableExampleWrapper = styled.div`
  min-height: calc(100vh - 64px);
`

export default function TableDemo() {
  return (
    <TableExampleWrapper>
      <TableExample />
    </TableExampleWrapper>
  )
}
