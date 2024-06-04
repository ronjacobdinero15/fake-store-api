import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ProductsProvider } from './contexts/ProductsContext'
import Home from './pages/Home'
import Cart from './pages/Cart'
import SelectedProduct from './pages/SelectedProduct'

function App() {
  return (
    <ProductsProvider>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product/:id" element={<SelectedProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Cart />} />
        </Routes>
      </Router>
    </ProductsProvider>
  )
}

export default App
