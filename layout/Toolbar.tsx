import React, { useState } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'

import { Dock } from 'primereact/dock'
import { Image } from 'primereact/image'

import styled from 'styled-components'

import { useRouter } from 'next/router'
import Link from 'next/link'

const ToolbarWrapper = styled.div`
  .p-dock {
    background-color: #80808087;
    padding-top: 1rem;
    .p-dock-list {
      background-color: #ffffff3b;
      .p-dock-item {
        a {
          color: white;
          i {
            font-size: 2rem;
          }
        }
      }
    }
  }
  width: 100%;
`

const Toolbar = () => {
  const router = useRouter()

  const items = [
    {
      label: 'Panel',
      icon: () => (
        <i className="pi pi-microsoft" onClick={() => router.push('/')}></i>
      ),
    },
    {
      label: 'Accounts',
      icon: () => (
        <i
          className="pi pi-calculator"
          onClick={() => router.push('/bank')}
        ></i>
      ),
    },
    {
      label: 'Strategies',
      icon: () => (
        <i
          className="pi pi-hourglass"
          onClick={() => router.push('/strategies')}
        ></i>
      ),
    },
    {
      label: 'Projections',
      icon: () => (
        <i
          className="pi pi-chart-bar"
          onClick={() => router.push('/projections')}
        ></i>
      ),
    },
    {
      label: 'Crypto',
      icon: () => (
        <i className="pi pi-bitcoin" onClick={() => router.push('/crypto')}></i>
      ),
    },
    {
      label: 'Million',
      icon: () => (
        <i
          className="pi pi-money-bill"
          onClick={() => router.push('/million')}
        ></i>
      ),
    },
    {
      label: 'FIIs',
      icon: () => (
        <i className="pi pi-building" onClick={() => router.push('/fiis')}></i>
      ),
    },
    {
      label: 'Instalments',
      icon: () => (
        <i
          className="pi pi-server"
          onClick={() => router.push('/instalments')}
        ></i>
      ),
    },
    {
      label: 'CurrentPrices',
      icon: () => (
        <i
          className="pi pi-paperclip"
          onClick={() => router.push('/current-prices')}
        ></i>
      ),
    },
    {
      label: 'Demo',
      icon: () => (
        <i className="pi pi-images" onClick={() => router.push('/demo')}></i>
      ),
    },
  ]

  return (
    <ToolbarWrapper>
      <Dock model={items} />
    </ToolbarWrapper>
  )
}

export default Toolbar
