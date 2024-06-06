import { useEffect } from 'react'
import { useProducts } from '../contexts/ProductsContext'
import PageNav from '../components/PageNav/PageNav'
import CartItem from '../components/CartItem/CartItem'
import EmptyCart from '../components/EmptyCart/EmptyCart'
import Footer from '../components/Footer/Footer'
import styles from './Cart.module.css'

function Cart() {
  const { cartedProducts: products, setSearchQuery } = useProducts()

  const subTotal = products.reduce(
    (prev, cur) => prev + cur.quantity * cur.price,
    0
  )

  useEffect(function () {
    setSearchQuery('')
    document.title = `Fake Store | Cart`

    return function () {
      document.title = 'Fake Store'
    }
  }, [])

  return (
    <div>
      <PageNav />
      <h2>Shopping Cart</h2>
      <div className={styles.cartContainer}>
        {products.length !== 0 ? (
          products.map(product => (
            <CartItem product={product} key={product.id} />
          ))
        ) : (
          <EmptyCart />
        )}
      </div>
      {subTotal !== 0 && <Footer subTotal={subTotal} />}
    </div>
  )
}

export default Cart
