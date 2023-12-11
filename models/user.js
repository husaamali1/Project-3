// * Import packages
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

// * Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 15 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

userSchema
  .virtual('carsCreated', {
    ref: 'Car',
    localField: '_id',
    foreignField: 'owner',
  })


// * Remove password from response
userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
  },
})

// * Virtual field 
userSchema
  .virtual('passwordConfirmation')
  .set(function(passwordConfirmationValue) {
    this._passwordConfirmation = passwordConfirmationValue
  })

// * Pre validate
userSchema.pre('validate', function(next){
  if (this.isModified('password') && this.password !== this._passwordConfirmation) {
    this.invalidate('passwordConfirmation', 'Password doesn\'t match')
  }
  next()
})

// * Hash and save
userSchema.pre('save', function(next){
  if (this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
  }
  next()
})


// * Create model
export default mongoose.model('User', userSchema)