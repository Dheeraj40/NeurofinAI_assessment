import styles from '../styles/Header.module.css'
import { FaSearch, FaSlash, FaBell, FaCog, FaPlus } from 'react-icons/fa'

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerTop}>
        <div className={styles.searchBar}>
          <FaSearch />
          <input type="text" placeholder="Jump to..." />
          <FaSlash className={styles.slashIcon} />
        </div>
        <div className={styles.headerIcons}>
          <div className={styles.sliderContainer}>
            <label className={styles.switch}>
              <input type="checkbox" />
              <span className={styles.slider}></span>
            </label>
          </div>
          <FaBell />
          <FaCog />
        </div>
      </div>
      <div className={styles.headerBottom}>
        <h1>Chargers</h1>
        <button className={styles.addButton}>
          <FaPlus /> Add Charger
        </button>
      </div>
    </div>
  )
}

export default Header
