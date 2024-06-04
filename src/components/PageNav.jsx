import { Link } from 'react-router-dom'
import { useProducts } from '../contexts/ProductsContext'
import styles from './PageNav.module.css'

function NavBar() {
  const { totalItems } = useProducts()

  return (
    <nav className={styles.nav}>
      <Link to="/">
        <header>
          <img
            src="https://fakestoreapi.com/icons/logo.png"
            alt="fakestoreapi"
          />
          <h3>Fake Store API</h3>
        </header>
      </Link>
      <ul className={styles.ul}>
        <li>
          <Link to="/cart">
            <svg
              width="50"
              height="50"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2353a40/svg"
            >
              <path
                d="M139.61 162.89L128.45 124.79H90.64"
                stroke="#353a40"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M165.54 251.15L147.31 289.75C143.73 297.32 149.26 306.04 157.63 306.04H280.68"
                stroke="#353a40"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M283.44 251.15H165.54L139.61 162.89H309.36L283.44 251.15Z"
                stroke="#353a40"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M168.01 350C175.482 350 181.54 343.942 181.54 336.47C181.54 328.998 175.482 322.94 168.01 322.94C160.538 322.94 154.48 328.998 154.48 336.47C154.48 343.942 160.538 350 168.01 350Z"
                stroke="#353a40"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M268 350C275.472 350 281.53 343.942 281.53 336.47C281.53 328.998 275.472 322.94 268 322.94C260.528 322.94 254.47 328.998 254.47 336.47C254.47 343.942 260.528 350 268 350Z"
                stroke="#353a40"
                strokeWidth="12"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {totalItems ? <span>{totalItems}</span> : null}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
