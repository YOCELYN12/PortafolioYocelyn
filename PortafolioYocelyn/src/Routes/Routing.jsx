import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { StrictMode } from 'react'
import Descripcion from '../Pages/Descripcion.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element:<Descripcion/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode> 
)

export default Routing