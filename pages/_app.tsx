import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'

import { BreadCrumb } from 'primereact/breadcrumb'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import type { AppProps } from 'next/app'

import Toolbar from './../layout/Toolbar'

const BreadCrumbWrapper = styled.div`
width: 100%
  position: fixed;
  top: 0;
`

export default function App({ Component, pageProps }: AppProps) {
  const items = [
    { label: 'Categories' },
    { label: 'Sports' },
    { label: 'Football' },
    { label: 'Countries' },
    { label: 'Spain' },
    { label: 'F.C. Barcelona' },
    { label: 'Squad' },
    {
      label: 'Lionel Messi',
      url: 'https://en.wikipedia.org/wiki/Lionel_Messi',
    },
  ]

  const home = {
    icon: 'pi pi-home',
    url: 'https://www.primefaces.org/primereact',
  }

  return (
    <>
      <BreadCrumbWrapper>
        <BreadCrumb model={items} home={home} />
      </BreadCrumbWrapper>
      <Component {...pageProps} />
      <Toolbar />
    </>
  )
}
