import { useProducts } from '../contexts/ProductsContext'
import PageNav from '../components/PageNav'
import Spinner from '../components/Spinner'
import Product from '../components/Product'
import styles from './Home.module.css'

function Home() {
  const { products, isLoading } = useProducts()

  if (isLoading) return <Spinner />

  return (
    <div>
      <PageNav />

      <main className={styles.productContainer}>
        {products.map(product => (
          <Product product={product} key={product.id} />
        ))}
      </main>
    </div>
  )
}

export default Home
