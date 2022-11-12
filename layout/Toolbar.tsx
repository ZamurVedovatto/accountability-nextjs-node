import React, { useState } from 'react'
import { CascadeSelect } from 'primereact/cascadeselect'
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
  const [selectedCity1, setSelectedCity1] = useState(null)

  const countries = [
    {
      name: 'Australia',
      code: 'AU',
      states: [
        {
          name: 'New South Wales',
          cities: [
            { cname: 'Sydney', code: 'A-SY' },
            { cname: 'Newcastle', code: 'A-NE' },
            { cname: 'Wollongong', code: 'A-WO' },
          ],
        },
        {
          name: 'Queensland',
          cities: [
            { cname: 'Brisbane', code: 'A-BR' },
            { cname: 'Townsville', code: 'A-TO' },
          ],
        },
      ],
    },
    {
      name: 'Canada',
      code: 'CA',
      states: [
        {
          name: 'Quebec',
          cities: [
            { cname: 'Montreal', code: 'C-MO' },
            { cname: 'Quebec City', code: 'C-QU' },
          ],
        },
        {
          name: 'Ontario',
          cities: [
            { cname: 'Ottawa', code: 'C-OT' },
            { cname: 'Toronto', code: 'C-TO' },
          ],
        },
      ],
    },
    {
      name: 'United States',
      code: 'US',
      states: [
        {
          name: 'California',
          cities: [
            { cname: 'Los Angeles', code: 'US-LA' },
            { cname: 'San Diego', code: 'US-SD' },
            { cname: 'San Francisco', code: 'US-SF' },
          ],
        },
        {
          name: 'Florida',
          cities: [
            { cname: 'Jacksonville', code: 'US-JA' },
            { cname: 'Miami', code: 'US-MI' },
            { cname: 'Tampa', code: 'US-TA' },
            { cname: 'Orlando', code: 'US-OR' },
          ],
        },
        {
          name: 'Texas',
          cities: [
            { cname: 'Austin', code: 'US-AU' },
            { cname: 'Dallas', code: 'US-DA' },
            { cname: 'Houston', code: 'US-HO' },
          ],
        },
      ],
    },
  ]

  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        {option.states && (
          <img
            alt={option.name}
            src="images/flag/flag_placeholder.png"
            onError={(e) =>
              (e.target.src =
                'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png')
            }
            className={`flag flag-${option.code.toLowerCase()}`}
          />
        )}
        {option.cities && <i className="pi pi-compass mr-2" />}
        {option.cname && <i className="pi pi-map-marker mr-2" />}
        <span>{option.cname || option.name}</span>
      </div>
    )
  }

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
          <Link href="/table-demo">Demos</Link>

          <CascadeSelect
            value={selectedCity1}
            options={countries}
            optionLabel={'cname'}
            optionGroupLabel={'name'}
            optionGroupChildren={['states', 'cities']}
            style={{ minWidth: '14rem' }}
            placeholder={'Select a City'}
            onChange={(event) => setSelectedCity1(event.value)}
          />
        </ListGroup.Item>
      </ListGroup>
    </ToolbarWrapper>
  )
}

export default Toolbar
