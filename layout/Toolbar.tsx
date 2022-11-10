import React from 'react'
import styled from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup'

const ToolbarWrapper = styled.div`
  width: 100%;
`

const Toolbar = () => {
  return (
    <ToolbarWrapper>
      <ListGroup horizontal defaultActiveKey="#link2">
        <ListGroup.Item action href="#link1" variant="light">Bank</ListGroup.Item>
        <ListGroup.Item action href="#link2" variant="light" active>Panel</ListGroup.Item>
        <ListGroup.Item action href="#link3" variant="light">Strategies</ListGroup.Item>
        <ListGroup.Item action href="#link4" variant="light">Cryptos</ListGroup.Item>
        <ListGroup.Item action href="#link5" variant="light">FII</ListGroup.Item>
        <ListGroup.Item action href="#link6" variant="light">Installment</ListGroup.Item>
        <ListGroup.Item action href="#link7" variant="light">Projections</ListGroup.Item>
        <ListGroup.Item action href="#link8" variant="light">Plans</ListGroup.Item>
      </ListGroup>
    </ToolbarWrapper>
  )
}

export default Toolbar