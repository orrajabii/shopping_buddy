import mongoose from 'mongoose'

const addressModelSchema = new mongoose.Schema({
    name: {type: String, default:'home'},
    street: { type: String, required: true },
    city:  { type: String, required: true },
    province:  { type: String, required: true },
    zip_code:  { type: String, required: true }
})

export default mongoose.model('Address', addressModelSchema)