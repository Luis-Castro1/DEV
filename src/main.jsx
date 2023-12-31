import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './context/AuthProvider.jsx'
import { CartProvider } from './context/cart.jsx'
import { ProductPreviewProvider } from './context/ProductPreviewContext.jsx'
import { ProfileEdit } from './context/ProfileEdit.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ProfileEdit>
      <CartProvider>
        <ProductPreviewProvider>
          <App />
        </ProductPreviewProvider>
      </CartProvider>
    </ProfileEdit>
  </AuthProvider>

)
