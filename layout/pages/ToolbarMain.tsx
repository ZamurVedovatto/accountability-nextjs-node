import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import styles from './../../styles/Home.module.css'
import Toolbar from './../Toolbar.tsx'

function ToolbarMain() {
  return (
    <>
      <div className={styles.toolbarMain}>
        <Toolbar />
        {/* <Breadcrumb className="px-3 pt-1 pb-0">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Panel
          </Breadcrumb.Item>
          <Breadcrumb.Item active>General</Breadcrumb.Item>
        </Breadcrumb> */}
      </div>
    </>
  )
}

export default ToolbarMain
