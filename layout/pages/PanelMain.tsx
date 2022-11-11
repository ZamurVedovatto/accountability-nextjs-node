import React from 'react'

import Placeholder from 'react-bootstrap/Placeholder'

import styles from './../../styles/Home.module.css'

import Panel from './../Panel.tsx'
import Projections from './../Projections.tsx'
import Strategies from './../Strategies.tsx'
import Investment from './../Investment.tsx'

function PanelMain() {
  return (
    <>
      <div className={styles.panelMain}>
        <Panel />
      </div>

      <div className={styles.projectionMain}>
        <Projections />
      </div>

      <div className={styles.strategiesMain}>
        <Strategies />
      </div>

      <div className={styles.investmentMain}>
        <Investment />
        <Placeholder xs={12} size="lg" />
        <Placeholder xs={12} />
        <Placeholder xs={12} size="sm" />
        <Placeholder xs={12} size="xs" />
      </div>
    </>
  )
}

export default PanelMain
