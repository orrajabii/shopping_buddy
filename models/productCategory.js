import mongoose from 'mongoose'
const Schema = mongoose.Schema

const productCatSchema = new Schema({
    name: { type: String, required: true },
    retailerId: { type: Schema.Types.ObjectId, ref: 'Retailer' ,required: true },
})

export default new mongoose.model('ProductCategory', productCatSchema)