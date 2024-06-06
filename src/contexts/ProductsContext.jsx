import { createContext, useContext, useEffect, useState } from 'react'
const ProductsContext = createContext()

function ProductsProvider({ children }) {
  const [cartedProducts, setCartedProducts] = useState([])
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  const totalItems = cartedProducts.reduce((acc, cur) => acc + cur.quantity, 0)

  const searchedPosts =
    searchQuery.length > 0
      ? products.filter(post =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : products

  useEffect(function () {
    async function getData() {
      try {
        setIsLoading(true)
        const res = await fetch('https://fakestoreapi.com/products?limit=10')

        if (!res.ok) throw new Error('Failed retrieving products')

        const data = await res.json()
        const newData = data.map(d => ({ ...d, quantity: 0 }))
        setProducts(newData)
      } catch (err) {
        console.error(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    getData()
  }, [])

  /* Here I just did another API call incase we needed to 
    extract the complete data of an item from the small data
    set provided to us, just an example
     */
  async function getProduct(id) {
    try {
      setIsLoading(true)
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)

      if (!res.ok) throw new Error('Failed to retrieve data')

      const data = await res.json()
      setSelectedProduct(data)
    } catch (err) {
      console.error(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  function handleCartProducts(addedProducts) {
    const itemExist = cartedProducts.find(
      product => product.id === addedProducts.id
    )

    if (itemExist) {
      setCartedProducts(products =>
        products.map(product =>
          product.id === addedProducts.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      )
    } else {
      setCartedProducts(products => [
        ...products,
        { ...addedProducts, quantity: 1 },
      ])
    }
  }

  function handleReduceItem() {
    setQuantity(quantity => (quantity !== 1 ? quantity - 1 : quantity))
  }

  function handleAddItem() {
    setQuantity(quantity => quantity + 1)
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        isLoading,
        cartedProducts,
        setCartedProducts,
        handleCartProducts,
        totalItems,
        getProduct,
        selectedProduct,
        setSelectedProduct,
        quantity,
        setQuantity,
        handleReduceItem,
        handleAddItem,
        searchQuery,
        setSearchQuery,
        searchedPosts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext)
  if (context === undefined)
    throw new Error('ProductsContext value is outside of ProductsProvider')
  return context
}

export { ProductsProvider, useProducts }
