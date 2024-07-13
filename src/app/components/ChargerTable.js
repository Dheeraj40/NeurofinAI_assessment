'use client';

import styles from '../styles/ChargerTable.module.css'
import { FaDownload, FaFilter, FaSearch } from 'react-icons/fa'
// import { redirect } from 'next/navigation'; // Updated import
// import { useRouter } from 'next/router';
import Link from 'next/link';

const ChargerTable = () => {
  const chargers = [
    {
      uid: "BOLT_00028926",
      operationalStatus: "Charging",
      status: "Charging",
      initializedOn: "Jul 02, 2024",
      lastPing: "An hour ago",
      energyDispensed: "416.962",
    },
    {
      uid: "BOLT_00037453",
      operationalStatus: "Available",
      status: "Available",
      initializedOn: "Jul 02, 2024",
      lastPing: "4 hours ago",
      energyDispensed: "238.792",
    },
    {
      uid: "L10031531",
      operationalStatus: "Available",
      status: "Available",
      initializedOn: "Jul 02, 2024",
      lastPing: "4 hours ago",
      energyDispensed: "0 kWh",
    },
    {
      uid: "L10031539",
      operationalStatus: "Available",
      status: "Available",
      initializedOn: "Jul 02, 2024",
      lastPing: "4 hours ago",
      energyDispensed: "0 kWh",
    },
    {
      uid: "L10031555",
      operationalStatus: "Available",
      status: "Available",
      initializedOn: "Jul 02, 2024",
      lastPing: "4 hours ago",
      energyDispensed: "0 kWh",
    },
    {
      uid: "L10031556",
      operationalStatus: "Available",
      status: "Available",
      initializedOn: "Jul 02, 2024",
      lastPing: "4 hours ago",
      energyDispensed: "0 kWh",
    },
    {
      uid: "L100044891",
      operationalStatus: "Available",
      status: "Available",
      initializedOn: "Jul 02, 2024",
      lastPing: "4 hours ago",
      energyDispensed: "0.043 kWh",
    }
  ]

  // const navigation = useNavigation(); // Use useNavigation hook
  // const router = useRouter();
  // const handleTabClick = (tab) => {
  //   if (tab === 'Bookings') {
  //     router.push('/about'); // Navigate to '/about' route
  //   }
  //   // Handle other tabs if needed
  // };


  return (
    <div className={styles.parentContainer}>
      <div className={styles.tableContainer}>
        <div className={styles.tabs}>
          <span className={styles.activeTab}>Chargers</span>
          <span className={styles.inactiveTab} >
            <Link href="/about">
              Bookings
            </Link>
          </span>
          <div className={styles.tabButtons}>
            <button className={styles.tabButton}><FaDownload /></button>
            <button className={styles.tabButton}><FaFilter /></button>
            <div className={styles.dropdown}>
              <FaSearch className={styles.dropdownIcon} />
              <select>
                <option value="">Charger UID</option>
                {chargers.map((charger, index) => (
                  <option key={index} value={charger.uid}>{charger.uid}</option>
                ))}
              </select>
            </div>
            <div className={styles.searchBar}>
              <FaSearch />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
        <table className={styles.table}>
          <thead className={styles.tableHead}>
            <tr>
              <th><input type="checkbox" /></th>
              <th>CHARGER UID</th>
              <th>OPERATIONAL STATUS</th>
              <th>STATUS</th>
              <th>INITIALIZED ON</th>
              <th>LAST PING</th>
              <th>ENERGY DISPENSED</th>
            </tr>
          </thead>
          <tbody>
            {chargers.map((charger, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{charger.uid}</td>
                <td><span className={styles.greenDot}></span> {charger.operationalStatus}</td>
                <td>
                  <span className={`${styles.status} ${charger.status === 'Charging' ? styles.charging : styles.available}`}>
                    {charger.status}
                  </span>
                </td>
                <td>{charger.initializedOn}</td>
                <td>{charger.lastPing}</td>
                <td>{charger.energyDispensed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ChargerTable



// onClick={() => handleTabClick('Bookings')