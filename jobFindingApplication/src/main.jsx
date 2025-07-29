import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'


createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}></RouterProvider>
)
