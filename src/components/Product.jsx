import { useProducts } from '../contexts/ProductsContext'
import { Link } from 'react-router-dom'
import Button from './Button'
import truncateText from '../utils/truncateText'
import styles from './Product.module.css'

function Product({ product }) {
  const { handleCartProducts } = useProducts()
  const truncatedTitle = truncateText(product.title, 6)

  return (
    <div className={styles.productContainer}>
      <Link to={`/product/${product.id}`} className={styles.link}>
        <div className={styles.product}>
          <img className={styles.img} src={product.image} alt={product.title} />
          <h4 className={styles.title}>{truncatedTitle}</h4>
        </div>
      </Link>
      <div className={styles.description}>
        <p className={styles.price}>${product.price}</p>
        <Button type="addToCart" onClick={() => handleCartProducts(product)}>
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default Product
