import mongoose from 'mongoose'
const Schema = mongoose.Schema

const paymentSchema = new Schema({
    date: { type: Date, default: new Date.now(), required: true },
    amount:  {type: Number, required: true},
    paymentMethid: { type: Schema.types.ObjectId, ref: 'PaymentMethod', required: true },
    customerOrderNo: { type: Schema.types.ObjectId, ref: 'CustomerOrder', required: true },
})

export default new mongoose.model('Payment', paymentSchema)