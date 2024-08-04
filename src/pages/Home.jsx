import PageNav from '../components/PageNav'
import Products from '../components/Products'
import Spinner from '../components/Spinner'
import { useProducts } from '../contexts/ProductsContext'

function Home() {
  const { isLoading } = useProducts()

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <PageNav />
          <Products />
        </>
      )}
    </>
  )
}

export default Home
