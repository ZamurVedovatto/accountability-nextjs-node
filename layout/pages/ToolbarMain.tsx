import React from 'react'
import styles from './../../styles/Home.module.css'
import Toolbar from './../Toolbar.tsx'

function ToolbarMain() {
  return (
    <>
      <div className={styles.toolbarMain}>
        <Toolbar />
      </div>
    </>
  )
}

export default ToolbarMain
