import Car from '../models/car.js'

// ? Index
// Method: GET 
// Path: /cars
export const getAllCars = async (req, res) => {
  const cars = await Car.find()
  return res.json(cars)
}

// ? Create
// Method: POST
// Path: cars/create
export const createCar = async (req, res) => {
  try {
    req.body.owner = req.currentUser._id
    const carToCreate = await Car.create(req.body)
    return res.status(201).json(carToCreate)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// ? Show
// Mehtod: GET
// Path: /cars/:carId
export const getSingleCar = async (req, res) => {
  try {
    const { carId } = req.params
    const car = await Car.findById(carId).populate('owner')
    if (!car){
      return res.status(404).json({ message: 'Car not found' })
    }
    // if it does exist
    return res.json(car)
  } catch (error) {
    console.log(error)
  }
}



// ? Update
// Method: PUT
// Path: /cars/:carId
export const updateCar = async (req, res) => {
  try {
    const { carId } = req.params
    const car = await Car.findById(carId)
    if (!car){
      return res.status(404).json({ message: 'Car not found' })
    }
    console.log(req.currentUser._id) // * User making request
    console.log(car.owner) // * User that owns the car
    console.log(car.owner.equals(req.currentUser._id)) // * Does user match owner?
    if (!car.owner.equals(req.currentUser._id)){
      return res.status(401).json({ message: 'unathorised' })
    }
    Object.assign(car, req.body)
    await car.save()
    return res.json(car)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// ? Delete
// Method: DELETE
// Path: /cars/:carId
export const deleteCar = async (req, res) => {
  try {
    const { carId } = req.params
    const car = await Car.findOneAndDelete({ _id: carId, owner: req.currentUser._id })
    if (!car) {
      return res.status(404).json({ message: 'Car not found or unauthorised' })
    }
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}