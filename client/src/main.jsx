// * Imports
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import useState from 'react'
// * Style
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/main.scss'

// Page components
import App from './App'
import Home from './component/AllCars'
import CarSingle from './component/CarSingle'
import CarCreate from './component/CarCreate'
import UpdateCar from './component/UpdateCar'
import Register from './component/Register'
import Login from './component/Login'
import Portfolio from './component/Portfolio'


// Loaders
import { getAllCars, getPortfolio, getSingleCar } from './utils/loaders/car'


// Actions
import { loginUser, registerUser } from './utils/actions/auth'
import { createCar, updateCar, deleteCar } from './utils/actions/car'
import ErrorPage from './component/ErrorPage'

// const [currentUser, setCurrentUser] = useState()


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getAllCars,
      },
      {
        path: '/cars/:carId',
        element: <CarSingle />,
        loader: async ({ params }) => getSingleCar(params.carId),
        action: async ({ params }) => deleteCar(params.carId)
      },
      {
        path: '/cars/create',
        element: <CarCreate />,
        action: async ({ request }) => createCar(request)
      },
      {
        element: <UpdateCar />,
        path: '/cars/:carId/edit',
        action: async({ request, params }) => updateCar(request, params.carId),
        loader: async ({ params }) => getSingleCar(params.carId)

      },
      {
        path: '/portfolio',
        element: <Portfolio />,
        loader: async ({ params }) => getPortfolio(params.carId)
      },
      {
        path: '/register',
        element: <Register />,
        action: async ({ request }) => registerUser(request)
      },
      {
        path: '/login',
        element: <Login />,
        action: async ({ request }) => loginUser(request)
      },
      // {
      //   path: 'cars/create',
      //   element: <Carcreate />,
      //   action: async ({ request }) => createCar(request),
      // }
    ],

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
