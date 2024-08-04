import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'

const ProductsContext = createContext()

const initialState = {
  products: [],
  currentProduct: '',
  cartedProducts: [],
  isLoading: false,
  error: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'products/isLoading':
      return {
        ...state,
        isLoading: true,
      }
    case 'products/loaded':
      return {
        ...state,
        products: action.payload,
        isLoading: false,
      }
    case 'product/selected':
      return {
        ...state,
        currentProduct: action.payload,
        isLoading: false,
      }
    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      throw new Error('Unknown action type')
  }
}

function ProductsProvider({ children }) {
  const [{ products, currentProduct, cartedProducts, isLoading }, dispatch] =
    useReducer(reducer, initialState)

  useEffect(() => {
    async function getProducts() {
      dispatch({ type: 'products/isLoading' })

      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        dispatch({ type: 'products/loaded', payload: data })
      } catch (err) {
        dispatch({
          type: 'rejected',
          action: 'There was an error loading data...',
        })
      }
    }
    getProducts()
  }, [])

  const getProduct = useCallback(
    async function (id) {
      if (Number(id) === currentProduct.id) return
      dispatch({ type: 'products/isLoading' })

      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        dispatch({ type: 'product/selected', payload: data })
      } catch (err) {
        dispatch({
          type: 'rejected',
          action: 'There was an error loading data...',
        })
      }
    },
    [currentProduct.id]
  )

  return (
    <ProductsContext.Provider
      value={{
        products,
        currentProduct,
        cartedProducts,
        isLoading,
        getProduct,
        dispatch,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

function useProducts() {
  const context = useContext(ProductsContext)
  if (context === undefined)
    throw new Error('ProductsContext value is out of ProductsProvider')
  return context
}

export { ProductsProvider, useProducts }
