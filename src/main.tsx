import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routers/Root.components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//components
import Home from './components/home/Home.components'
import Shop from './components/shop/shop.component'
import { UserProvider } from './contexts/user.context'

import './index.scss'
import Authentication from './components/authentication/Authentication.component'
import { ProductProvider } from './contexts/product.context'
import CartDropDown from './components/cart-dropdown/CartDropDown.component'
import { CartProvider } from './contexts/cart.context'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'authentication',
        element: <Authentication />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>
)
