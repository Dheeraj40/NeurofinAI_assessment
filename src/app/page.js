// pages/index.js
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ChargerTable from './components/ChargerTable'
import DetailPanel from './components/DetailPanel'
import styles from './styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <Header />
        <div className={styles.content}>
          <ChargerTable />
          <DetailPanel />
        </div>
      </div>
    </div>
  )
}
