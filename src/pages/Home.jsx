import { useProducts } from '../contexts/ProductsContext'
import PageNav from '../components/PageNav/PageNav'
import Spinner from '../components/Spinner/Spinner'
import Product from '../components/Product/Product'
import styles from './Home.module.css'

function Home() {
  const { products, isLoading, searchedPosts } = useProducts()

  if (isLoading) return <Spinner />

  return (
    <div>
      <PageNav />

      <main className={styles.productContainer}>
        {searchedPosts
          ? searchedPosts.map(product => (
              <Product product={product} key={product.id} />
            ))
          : products.map(product => (
              <Product product={product} key={product.id} />
            ))}
      </main>
    </div>
  )
}

export default Home
