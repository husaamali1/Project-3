// * Import
import mongoose from 'mongoose'

// Import Models
import Car from '../models/car.js'
import User from '../models/user.js'

// Import Data
import carData from './data/cars.js'
import userData from './data/users.js'

// .env
import 'dotenv/config'

async function seed(){
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('✅ Database connection active')
    const { deleteCount: deleteCar } = await Car.deleteMany()
    console.log(`❌ Deleted ${deleteCar} car from the database`)
    const { deleteCount: deleteUser } = await User.deleteMany()
    console.log(`❌ Delete ${deleteUser} users from the database`)
    const usersCreated = await User.create(userData)
    console.log(`seeded ${usersCreated.length} users to the database`)
    const ownedCars = carData.map(car => {
      const randomUserindx = Math.floor(Math.random() * usersCreated.length)
      return { ...car, owner: usersCreated[randomUserindx]._id } 
    })
    const carsCreated = await Car.create(ownedCars)
    console.log(`seeded ${carsCreated.length} cars to the database`)
    await mongoose.connection.close()
    console.log('Connection to the database is closed')
  } catch (error) {
    console.log(error)
    await mongoose.connection.close()
    console.log('Connection to the database is closed')
  }
}
seed()