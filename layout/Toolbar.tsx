import React, { useState } from 'react'

import ListGroup from 'react-bootstrap/ListGroup'

import { Dock } from 'primereact/dock'
import { Image } from 'primereact/image'

import styled from 'styled-components'

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
  .list-group-item {
    padding: 0.25rem;
    font-size: 0.85rem;
  }
  a {
    text-align: center;
  }
`

const Toolbar = () => {
  const imgPath = 'images/dock'
  const imgErrorPath =
    'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'

  const items = [
    {
      label: 'Panel',
      icon: () => (
        <Link href="/">
          <i className="pi pi-bookmark-fill"></i>
        </Link>
      ),
    },
    {
      label: 'Accounts',
      icon: () => (
        <Link href="/bank">
          <i className="pi pi-calculator"></i>
        </Link>
      ),
    },
    {
      label: 'Projections',
      icon: () => (
        <Link href="/demo">
          <i className="pi pi-chart-bar"></i>
        </Link>
      ),
    },
    {
      label: 'Strategies',
      icon: () => (
        <Link href="/demo">
          <i className="pi pi-hourglass"></i>
        </Link>
      ),
    },
    {
      label: 'Crypto',
      icon: () => (
        <Link href="/demo">
          <i className="pi pi-bitcoin"></i>
        </Link>
      ),
    },
    {
      label: 'Demo',
      icon: () => (
        <Link href="/demo">
          <i className="pi pi-pi-clone"></i>
        </Link>
      ),
    },
  ]

  return (
    <ToolbarWrapper>
      <Dock model={items} />
      {/* <ListGroup horizontal>
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
      </ListGroup> */}
    </ToolbarWrapper>
  )
}

export default Toolbar
