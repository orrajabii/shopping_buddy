import mongoose from 'mongoose'
const Schema = mongoose.Schema

const custOrderDetailsSchema = new Schema({
    productId:{ type: Schema.types.ObjectId,ref: 'ProductCategory' , required: true },
    quantity: { type: Number, required: true }
})

export default new mongoose.model('CustomerOrderDetail', custOrderDetailsSchema)