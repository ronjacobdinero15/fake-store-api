import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useSearchQuery } from '../contexts/SearchContext'
import styles from './PageNav.module.css'

function PageNav() {
  const [searchQuery, setSearchQuery] = useState('')
  const { handleSearchQuery } = useSearchQuery()
  const location = useLocation()

  function handleSearchInput(e) {
    setSearchQuery(e.target.value)
    handleSearchQuery(e.target.value)
  }

  return (
    <header className={styles.header}>
      <NavLink to="/">[ INSERT COMPANY LOGO ]</NavLink>

      {!location.pathname.includes('/product') && (
        <input
          id="search"
          className={styles.search}
          type="search"
          value={searchQuery}
          placeholder="Search for product"
          onChange={handleSearchInput}
        />
      )}

      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default PageNav
