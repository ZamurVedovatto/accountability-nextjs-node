import React from 'react'
import Table from 'react-bootstrap/Table'
import styled from 'styled-components'

const ProjectionsWrapper = styled.div`
  font-size: 0.75rem;
`

function Projections() {
  return (
    <ProjectionsWrapper>
      <Table striped hover responsive="xl" size="sm">
        <thead>
          <tr>
            <th colSpan={2}></th>
            <th>future balance</th>
            <th>contributions until May 23</th>
            <th colSpan={5}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>R$12.326,50</td>
            <td>cidadania via judicial</td>
            <td>R$37.524,28</td>
            <td>R$7.000,00</td>
            <td>R$44.524,28</td>
            <td colSpan={4}></td>
          </tr>
          <tr>
            <td>R$6.000,00</td>
            <td>notebook</td>
            <td>R$37.250,78</td>
            <td>R$7.000,00</td>
            <td>R$44.350,78</td>
            <td>R$32.024,28</td>
            <td colSpan={3}></td>
          </tr>
          <tr>
            <td>R$12.5.000,00</td>
            <td>italy trip</td>
            <td>R$37.250,78</td>
            <td>R$7.000,00</td>
            <td>R$44.350,78</td>
            <td>R$32.024,28</td>
            <td>R$32.024,28</td>
            <td colSpan={2}></td>
          </tr>
          <tr>
            <td>R$30.000,00</td>
            <td>emergency savings</td>
            <td>R$37.250,78</td>
            <td>R$7.000,00</td>
            <td>R$44.350,78</td>
            <td>R$32.024,28</td>
            <td>R$32.024,28</td>
            <td>R$32.024,28</td>
            <td colSpan={1}></td>
          </tr>
        </tbody>
      </Table>
    </ProjectionsWrapper>
  )
}

export default Projections
