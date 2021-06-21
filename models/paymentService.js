import mongoose from 'mongoose'
const Schema = mongoose.Schema

const payServiceSchema = new Schema({
    amount: {type: Number, required: true},
    dateAndTime: { type: Date, default: new Date.now() },
    status: {type: String, required: true},
    paymentId: { type: Schema.Types.ObjectId, required: true }
})

export default new mongoose.model('PaymentService', payServiceSchema)