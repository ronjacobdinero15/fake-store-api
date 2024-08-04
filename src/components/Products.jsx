import { Link } from 'react-router-dom'
import { useProducts } from '../contexts/ProductsContext'
import { useSearchQuery } from '../contexts/SearchContext'
import Spinner from '../components/Spinner'
import styles from './Products.module.css'
import ProductNotFound from './ProductNotFound'

function Products() {
  const { products } = useProducts()
  const { searchQuery, searchProductResults, isLoading } = useSearchQuery()
  const showProducts =
    searchProductResults.length > 0 ? searchProductResults : products

  if (searchQuery && searchProductResults.length === 0)
    return <ProductNotFound />

  return (
    <main className={styles.productsContainer}>
      {isLoading ? (
        <Spinner />
      ) : (
        showProducts.map(product => (
          <div key={product.id} className={styles.product}>
            <Link to={`/product/${product.id}`}>
              <img
                className={styles.productImg}
                src={product.image}
                alt={product.title}
              />
            </Link>
            <div className={styles.mainDescriptionContainer}>
              <h3 className={styles.title}>{product.title}</h3>
              <div className={styles.subDescriptionContainer}>
                <h4>${product.price}</h4>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.btnContainer}>
                  <button className={styles.cart}>Add to cart</button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </main>
  )
}

export default Products
