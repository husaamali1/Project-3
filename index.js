// * Imports
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './config/routes.js'

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(`🎯 Request received: ${req.method} ${req.url}`)
  next()
})

// ? Endpoints
app.use('/api', router)

async function startServer(){
  try {
    await mongoose.connect(process.env.CONNECTION_STRING)
    console.log('✅ Database connection is set up')
    app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`))
  } catch (error) {
    console.log('❌ Error establishing connection')
    console.log(error)
  }
}
startServer()
