'use client';
import styles from '../styles/DetailPanel.module.css'
import { FaEdit, FaInfoCircle, FaMap, FaChartBar, FaHeadset } from 'react-icons/fa'
import Link from 'next/link';


const DetailPanel = () => {
  return (
    <div className={styles.panelContainer}>
      <div className={styles.header}>
        <h3>BOLT_00028926</h3>
        <div className={styles.headerIcons}>
          <FaInfoCircle />
          <FaMap />
          <FaChartBar />
          <FaHeadset />
        </div>
      </div>
      <div className={styles.tabs}>
        <div>
          <span className={styles.activeTab}>Information</span>
          <span className={styles.inactiveTab}>
            <Link href="/about">Bookings</Link>
          </span>
          <span className={styles.inactiveTab}>
            <Link href="/about">Stats</Link>
          </span>
          <span className={styles.inactiveTab}>
            <Link href="/about">Map View</Link>
          </span>
          <span className={styles.inactiveTab}>
            <Link href="/about">Support Logs</Link>
          </span>
        </div>
      </div>
      <div className={styles.scrollableContent}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Charger Info</span>
            <FaEdit className={styles.iconDist}/>
          </div>
          <div className={styles.sectionContent}>
          <div className={styles.keysColumn}>
            <div><strong>UID:</strong></div>
            <div><strong>Name:</strong></div>
            <div><strong>Initialized On:</strong></div>
            <div><strong>Last Ping:</strong></div>
          </div>
          <div className={styles.valuesColumn}>
            <div>BOLT_00028926</div>
            <div>JS carnation EV charger -1</div>
            <div>Jul 02, 2024, 16:05</div>
            <div>Jul 02, 2024, 19:01</div>
          </div>
        </div>
        
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Owner Info</span>
            <FaEdit className={styles.iconDist}/>
          </div>
          <div className={styles.sectionContent}>
            <div className={styles.keysColumn}>
              <div><strong>Name:</strong></div>
              <div><strong>Phone Number:</strong></div>
              <div><strong>Alternate Phone 1:</strong></div>
              <div><strong>Alternate Phone 2:</strong></div>
            </div>
            <div className={styles.valuesColumn}>
              <div>Ayan Basu</div>
              <div>+91 91489 19899</div>
              <div>-</div>
              <div>-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPanel
