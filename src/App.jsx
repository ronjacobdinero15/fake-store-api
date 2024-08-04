import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ProductsProvider } from './contexts/ProductsContext'
import { SearchProvider } from './contexts/SearchContext'

import Home from './pages/Home'
import SelectedProduct from './pages/SelectedProduct'
import Cart from './pages/Cart'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <ProductsProvider>
      <SearchProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SelectedProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
      </SearchProvider>
    </ProductsProvider>
  )
}

export default App
