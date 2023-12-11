import express from 'express'
import {
  getAllCars,
  createCar,
  getSingleCar,
  updateCar,
  deleteCar

} from '../controllers/cars.js'
import { register, login, getPortfolio } from '../controllers/users.js'
import secureRoute from './secureRoute.js'

const router = express.Router()

// * Cars
router.route('/cars')
  .get(secureRoute, getAllCars)


router.route('/cars/create')
  .post(secureRoute, createCar)


router.route('/cars/:carId')
  .get(secureRoute, getSingleCar)
  .put(secureRoute, updateCar)
  .delete(secureRoute, deleteCar)

// * User

router.route('/portfolio')
  .get(secureRoute, getPortfolio)

// * Auth
router.route('/register')
  .post(register)

router.route('/login')
  .post(login)

export default router

