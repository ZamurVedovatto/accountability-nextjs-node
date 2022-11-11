import React from 'react'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'

const StrategiesWrapper = styled.div`
  font-size: 0.75rem;
`

function Strategies() {
  return (
    <StrategiesWrapper>
      <span className="text-muted fs-4">
        set cdk-dnd-material-angular to reorder priorities
      </span>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>financial strategies</th>
            <th>priority</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cidadaniajá documentation</td>
            <td>1</td>
          </tr>
          <tr>
            <td>contato desvio de septo</td>
            <td>1</td>
          </tr>
          <tr>
            <td>aumentar porcentagem em FIIs e crypto</td>
            <td>3</td>
          </tr>
          <tr>
            <td>conta global c6 - vale a pena?</td>
            <td>4</td>
          </tr>
          <tr>
            <td>conta nomad - cartão de débito</td>
            <td>5</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </StrategiesWrapper>
  )
}

export default Strategies
