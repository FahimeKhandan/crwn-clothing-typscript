import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routers/Root.components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//components
import Home from './components/home/Home.components'
import Shop from './components/shop/shop.component'

import './index.scss'
import SignIn from './components/sign-in/SignIn.component'
import SignUpForm from './components/sign-up/SignUpForm.component'

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
        path: 'signIn',
        element: <SignIn />
      },
      {
        path: 'signUpForm',
        element: <SignUpForm />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
