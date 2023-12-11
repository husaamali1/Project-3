// * Import Package
import mongoose from 'mongoose'

// * Car schema
const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  origin: { type: String, required: true },
  owner: { type: mongoose.ObjectId, ref: 'User', required: true },
})




// * Virtuals
carSchema
  .set('toJSON', {
    virtuals: true,
  })

export default mongoose.model('Car', carSchema)