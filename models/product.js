import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageURL: { type: String, required: true },
    category: [{ type: mongoose.Types.ObjectId, ref: 'Category' }],
    tags: { type: Array, items: { type: String } }
})

export default new mongoose.model('Product', productSchema)