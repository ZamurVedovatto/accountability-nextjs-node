import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import type { AppProps } from 'next/app'

import ToolbarMain from './../layout/pages/ToolbarMain'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ToolbarMain />
    </>
  )
}
