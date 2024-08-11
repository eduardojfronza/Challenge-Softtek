import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Challenge from './Challenge.jsx'
import About from './About.jsx'
import Solution from './Solution.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/desafio",
    element: <Challenge />
  },
  {
    path: "/sobre",
    element: <About />
  },
  {
    path: "/solucao",
    element: <Solution />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
