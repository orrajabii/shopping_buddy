import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productCatSchema = new Schema({
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    imageURL: { type: 'string', required: true },
    retailerId: { type: Schema.Types.ObjectId, ref: 'Retailer', required: true },
})

export default new mongoose.model('Category', productCatSchema)