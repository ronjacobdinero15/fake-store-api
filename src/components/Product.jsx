import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Spinner from '../components/Spinner'
import { useProducts } from '../contexts/ProductsContext'
import styles from './Product.module.css'

function Product() {
  const { id } = useParams()
  const { getProduct, currentProduct, isLoading } = useProducts()

  useEffect(() => {
    getProduct(id)
  }, [id, getProduct])

  if (isLoading) return <Spinner />

  return (
    <main className={styles.productContainer}>
      <img
        className={styles.productImg}
        src={currentProduct.image}
        alt={currentProduct.title}
      />
      <div className={styles.descriptionContainer}>
        <h3 className={styles.title}>{currentProduct.title}</h3>
        <h4>${currentProduct.price}</h4>
        <p className={styles.description}>{currentProduct.description}</p>
        <button className={styles.cart}>Add to cart</button>
      </div>
    </main>
  )
}

export default Product
