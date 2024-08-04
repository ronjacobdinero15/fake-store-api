import { createContext, useContext, useReducer } from 'react'
import { useProducts } from '../contexts/ProductsContext'

const SearchContext = createContext()

const initialState = {
  searchQuery: '',
  searchProductResults: [],
  isLoading: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'search/isLoading':
      return {
        ...state,
        isLoading: true,
      }
    case 'search/queried':
      return {
        ...state,
        searchQuery: action.payload.query,
        searchProductResults: action.payload.searchResults,
        isLoading: false,
      }
    default:
      throw new Error('Unknown action type')
  }
}

function SearchProvider({ children }) {
  const [{ searchQuery, searchProductResults, isLoading }, dispatch] =
    useReducer(reducer, initialState)
  const { products } = useProducts()

  function handleSearchQuery(query) {
    dispatch({ type: 'search/isLoading' })
    const searchResults = products.filter(product =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    dispatch({ type: 'search/queried', payload: { query, searchResults } })
  }

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        searchProductResults,
        handleSearchQuery,
        isLoading,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

function useSearchQuery() {
  const context = useContext(SearchContext)
  if (context === undefined)
    throw new Error('ProductsContext value is out of ProductsProvider')
  return context
}

export { SearchProvider, useSearchQuery }
