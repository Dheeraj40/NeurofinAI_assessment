'use client';
// components/Sidebar.js
import { FaBolt, FaUsers, FaChartBar, FaCogs } from 'react-icons/fa'
import styles from '../styles/Sidebar.module.css'
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <FaBolt size={30} />
        <span>Boltearth</span>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>  <Link href="/about"><FaBolt /> Overview</Link></li>
          <li className={styles.navItem}>  <Link href="/about"><FaBolt /> Chargers</Link></li>
          <li className={styles.navItem}>  <Link href="/about"><FaUsers /> Users</Link></li>
          <li className={styles.navItem}>  <Link href="/about"><FaChartBar /> Reports</Link></li>
          <li className={styles.navItem}>  <Link href="/about"><FaCogs /> Admin</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
