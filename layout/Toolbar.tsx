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
        cursor: pointer;
        a {
          cursor: pointer;
          color: white;
          text-decoration: none;
          &:hover {
            i {
              color: yellow;
            }
          }
          i {
            font-size: 2rem;
            &.active {
              color: red;
            }
          }
        }
      }
    }
  }
  width: 100%;
`

const Toolbar = () => {
  const [something, setSomething] = useState('p-3')
  const router = useRouter()

  console.log(router.pathname)

  const onChangeRoute = (e, route) => {
    router.push(route)
  }

  const activeLink = (route) => {
    return router.pathname == route ? 'active' : ''
  }

  const items = [
    {
      label: 'Panel',
      icon: () => (
        <i
          className={'pi pi-microsoft ' + activeLink('/')}
          onClick={(e) => onChangeRoute(e, '/')}
        ></i>
      ),
    },
    {
      label: 'Accounts',
      icon: () => (
        <i
          className={'pi pi-calculator ' + activeLink('/bank')}
          onClick={(e) => onChangeRoute(e, '/bank')}
        ></i>
      ),
    },
    {
      label: 'Strategies',
      icon: () => (
        <i
          className="${router.pathname == '/strategies' ? 'active' : ''} pi pi-hourglass"
          onClick={(e) => onChangeRoute(e, '/strategies')}
        ></i>
      ),
    },
    {
      label: 'Projections',
      icon: () => (
        <i
          className="${router.pathname == '/projections' ? 'active' : ''} pi pi-chart-bar"
          onClick={(e) => onChangeRoute(e, '/projections')}
        ></i>
      ),
    },
    {
      label: 'Crypto',
      icon: () => (
        <i
          className="${router.pathname == '/crypto' ? 'active' : ''} pi pi-bitcoin"
          onClick={(e) => onChangeRoute(e, '/crypto')}
        ></i>
      ),
    },
    {
      label: 'Million',
      icon: () => (
        <i
          className="${router.pathname == '/million' ? 'active' : ''} pi pi-money-bill"
          onClick={(e) => onChangeRoute(e, '/million')}
        ></i>
      ),
    },
    {
      label: 'FIIs',
      icon: () => (
        <i
          className="${router.pathname == '/fiis' ? 'active' : ''} pi pi-building"
          onClick={(e) => onChangeRoute(e, '/fiis')}
        ></i>
      ),
    },
    {
      label: 'Instalments',
      icon: () => (
        <i
          className="${router.pathname == '/instalments' ? 'active' : ''} pi pi-server"
          onClick={(e) => onChangeRoute(e, '/instalments')}
        ></i>
      ),
    },
    {
      label: 'CurrentPrices',
      icon: () => (
        <i
          className="${router.pathname == '/current-prices' ? 'active' : ''} pi pi-paperclip"
          onClick={(e) => onChangeRoute(e, '/current-prices')}
        ></i>
      ),
    },
    {
      label: 'Demo',
      icon: () => (
        <i
          className="${router.pathname == '/demo' ? 'active' : ''} pi pi-images"
          onClick={(e) => router.push(e, '/demo')}
        ></i>
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
