// * Imports
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// * Style
import 'bootstrap/dist/css/bootstrap.min.css'

// Page components
import App from './App'
import AllCars from './component/AllCars'
import CarSingle from './component/CarSingle'
import Carcreate from './component/CarCreate'
import Register from './component/Register'
import Login from './component/Login'

// Loaders


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
