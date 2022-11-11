import styles from '../styles/Home.module.css'
import PanelMain from './../layout/pages/PanelMain.tsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.dashboardMain}>
        <PanelMain />
      </div>
    </div>
  )
}
