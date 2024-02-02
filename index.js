// * Imports
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import router from './config/routes.js'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(`🎯 Request received: ${req.method} ${req.url}`)
  next()
})

// ? Endpoints
app.use('/api', router)

// The below line is the router, this should already be present and doesn't need to be added. Add everything below it.
app.use('/api', router) 

// ** New lines **
app.use(express.static(path.join(__dirname, 'client', 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
})

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
