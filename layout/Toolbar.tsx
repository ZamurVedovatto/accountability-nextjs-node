import React, { useState } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'

import styled from 'styled-components'

import Link from 'next/link'

const ToolbarWrapper = styled.div`
  width: 100%;
  .list-group-item {
    padding: 0.25rem;
    font-size: 0.85rem;
  }
  a {
    text-align: center;
  }
`

const Toolbar = () => {
  return (
    <ToolbarWrapper>
      <ListGroup horizontal>
        <ListGroup.Item variant="light">
          <Link href="/bank">Accounts</Link>
        </ListGroup.Item>
        <ListGroup.Item variant="light">
          <Link href="/">Panel</Link>
        </ListGroup.Item>
        <ListGroup.Item variant="light">Strategies</ListGroup.Item>
        <ListGroup.Item variant="light">Cryptos</ListGroup.Item>
        <ListGroup.Item variant="light">FII</ListGroup.Item>
        <ListGroup.Item variant="light">Installment</ListGroup.Item>
        <ListGroup.Item variant="light">Projections</ListGroup.Item>
        <ListGroup.Item variant="light">Plans</ListGroup.Item>

        <ListGroup.Item variant="light">
          <Link href="/demo">Demos</Link>
        </ListGroup.Item>
      </ListGroup>
    </ToolbarWrapper>
  )
}

export default Toolbar
