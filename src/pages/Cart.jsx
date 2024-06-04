import { useProducts } from '../contexts/ProductsContext'
import PageNav from '../components/PageNav'
import CartItem from '../components/CartItem'
import EmptyCart from '../components/EmptyCart'
import Footer from '../components/Footer'
import styles from './Cart.module.css'

function Cart() {
  const { cartedProducts: products } = useProducts()

  const subTotal = products.reduce(
    (prev, cur) => prev + cur.quantity * cur.price,
    0
  )

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
