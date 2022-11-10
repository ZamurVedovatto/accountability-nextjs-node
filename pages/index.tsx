import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Panel from './../layout/Panel.tsx'
import Toolbar from './../layout/Toolbar.tsx'

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Placeholder from 'react-bootstrap/Placeholder';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';


export default function Home() {
  return (
    <div className={styles.container}>
      <Breadcrumb className="px-3 pt-1 pb-0">
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Panel
        </Breadcrumb.Item>
        <Breadcrumb.Item active>General</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.dashboardMain}>
        
        <div className={styles.panelMain}>
          <Panel />
        </div>
        
        <div className={styles.projectionMain}>
          <Placeholder xs={12} size="lg" />
          <Placeholder xs={12} />
          <Placeholder xs={12} size="sm" />
          <Placeholder xs={12} size="xs" />
        </div>

        <div className={styles.strategiesMain}>
          <Placeholder xs={12} size="lg" />
          <Placeholder xs={12} />
          <Placeholder xs={12} size="sm" />
          <Placeholder xs={12} size="xs" />
        </div>

        <div className={styles.investmentMain}>
          <Placeholder xs={12} size="lg" />
          <Placeholder xs={12} />
          <Placeholder xs={12} size="sm" />
          <Placeholder xs={12} size="xs" />
        </div>

        <div className={styles.toolbarMain}>
          <Toolbar />
        </div>

      </div>

    </div>
  )
}

{/* <div className={styles.container}></div> */}


// TODOZ
// - set project to scss
// - 
// - 
// - 
// - 
// - 
// - 
// - 



// ---- 
// cockpit
// https://www.geeksforgeeks.org/how-to-create-a-currency-converter-app-in-reactjs/