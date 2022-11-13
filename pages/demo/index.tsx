import React, { useState } from 'react'

import styled from 'styled-components'
import { PageContentWrapper } from './../../styles/utils/PageContentStyles'

import { CascadeSelect } from 'primereact/cascadeselect'
import Placeholder from 'react-bootstrap/Placeholder'
import { Image } from 'primereact/image'

import Card from './../../components/theme/Card'
import Table from './../../components/theme/Table'
import LineChart from './../../components/theme/LineChart'

const DocWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #eff3f8;
  border-bottom: 2rem #4e4e4e21 solid;

  > div {
    height: 100%;
    padding: 1rem;
    &:last-child {
      padding-bottom: 120px;
    }
  }
`

const Documentation = () => {
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
          <Image
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
    <PageContentWrapper>
      <DocWrapper>
        <div className="m-4">
          <Card />
        </div>
        <div className="m-4">
          <Table />
        </div>
        <div className="m-4">
          <LineChart />
        </div>
        <div className="m-4">
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
        </div>
      </DocWrapper>
    </PageContentWrapper>
  )
}

export default Documentation
