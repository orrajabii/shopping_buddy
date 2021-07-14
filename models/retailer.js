import mongoose from 'mongoose'
const Schema = mongoose.Schema

const retailerSchema = new Schema({
    name: { type: String, required: true },
    contactNo: { type: String, required: true },
    email: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        province: { type: String, required: true },
        zip_code: { type: String, required: true }
    },
    password: { type: String },
    products: [{ type: Schema.Types.ObjectId, ref: 'Products' }]
})

export default new mongoose.model('Retailer', retailerSchema)