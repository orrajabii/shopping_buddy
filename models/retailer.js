import mongoose from 'mongoose'
const Schema = mongoose.Schema

const retailerSchema = new Schema({
    name: { type: String, required: true },
    contactNo: { type: String, required: true },
    email: { type: String, required: true },
    address: [{ type: Schema.Types.ObjectId, ref: 'Address' ,required: true }],
    password: { type: String, required: true },
})

export default new mongoose.model('Retailer', retailerSchema)