import { Link } from 'react-router-dom'
import { useProducts } from '../../contexts/ProductsContext'
import Button from '../Button/Button'
import truncateText from '../../utils/truncateText'
import styles from './CartItem.module.css'

function CartItem({ product }) {
  const { setCartedProducts } = useProducts()

  function handleCartReduceItem(id) {
    if (product.quantity === 1) return

    setCartedProducts(products =>
      products.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    )
  }

  function handleCartAddItem(id) {
    setCartedProducts(products =>
      products.map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    )
  }

  function handleRemoveCartedItem(curProduct) {
    setCartedProducts(products =>
      products.filter(product => product.id !== curProduct.id)
    )
  }

  return (
    <div className={styles.productContainer} key={product.id}>
      <Link to={`/product/${product.id}`}>
        <img
          className={styles.img}
          src={product.image}
          alt={product.description}
        />
      </Link>
      <div className={styles.description}>
        <h3>{truncateText(product.title, 6)}</h3>
        <h4>${product.price}</h4>

        <div className={styles.selection}>
          <div className={styles.quantity}>
            <Button
              type="quantity"
              onClick={() => handleCartReduceItem(product.id)}
            >
              –
            </Button>
            <span>{product.quantity}</span>
            <Button
              type="quantity"
              onClick={() => handleCartAddItem(product.id)}
            >
              +
            </Button>
          </div>

          <svg
            className={styles.removeItem}
            width="30px"
            height="30px"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#353a40"
            stroke="#353a40"
            onClick={() => handleRemoveCartedItem(product)}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>remove item</title>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Shape"
                  fill="#353a40"
                  transform="translate(64.000000, 42.666667)"
                >
                  <path d="M256,42.6666667 L128,42.6666667 L128,7.10542736e-15 L256,7.10542736e-15 L256,42.6666667 Z M170.666667,170.666667 L128,170.666667 L128,341.333333 L170.666667,341.333333 L170.666667,170.666667 Z M256,170.666667 L213.333333,170.666667 L213.333333,341.333333 L256,341.333333 L256,170.666667 Z M384,85.3333333 L384,128 L341.333333,128 L341.333333,426.666667 L42.6666667,426.666667 L42.6666667,128 L0,128 L0,85.3333333 L384,85.3333333 Z M298.666667,128 L85.3333333,128 L85.3333333,384 L298.666667,384 L298.666667,128 Z"></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default CartItem
