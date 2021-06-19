import mongoose from 'mongoose'
const Schema = mongoose.Schema

const payMethodSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
})

export default new mongoose.model('PaymentMethod', payMethodSchema)