import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Project from './pages/Project'
import Resume from './pages/Resume'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/project',
    element: <Project/>
  },
  {
    path:'/resume',
    element: <Resume/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
