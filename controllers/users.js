// * Import
import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// * Register
export const register = async (req, res) => {
  try {
    const createUser = await User.create(req.body)
    return res.status(201).json({ message: `Welcome ${createUser.username}` })
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// * Login
export const login = async (req, res) => {
  try {
    const userToLogin = await User.findOne({ email: req.body.email })
    if (!userToLogin || !bcrypt.compareSync(req.body.password, userToLogin.password)){
      throw new Error(!userToLogin ? 'Email doesn\'t exist' : 'password don\'t match')
    }
    const token = jwt.sign({ sub: userToLogin._id }, process.env.SECRET, { expiresIn: '10d' })
    return res.json({ message: `Welcome back ${userToLogin.username}`, token: token })
  } catch (error) {
    console.log(error)
    return res.status(401).json({ message: 'unauthorised' })
  }
}

// ? Portfolio route
// Method: GET
// Path: /portfolio
export const getPortfolio = async (req, res) => {
  try {
    // console.log(req.currentUser)
    const portfolio = await User.findById(req.currentUser._id).populate('carsCreated')
    return res.json(portfolio)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}