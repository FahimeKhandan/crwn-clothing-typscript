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
import { CategoriesProvider } from './contexts/categories.context'
import CartDropDown from './components/cart-dropdown/CartDropDown.component'
import { CartProvider } from './contexts/cart.context'
import Checkout from './components/checkout/checkout.component'
import Category from './components/category/category.component'

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
        element: <Shop />,
        children: [
          {
            path: ":category",
            element: <Category />,
          },
        ],
      },
      {
        path: 'authentication',
        element: <Authentication />
      },
      {
        path: 'checkout',
        element: <Checkout />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </React.StrictMode>
)
