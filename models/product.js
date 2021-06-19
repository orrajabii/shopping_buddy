import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    productCategory: { type: Schema.types.ObjectId,ref: 'ProductCategory' , required: true },
})

export default new mongoose.model('Product', productSchema)