import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CustomerOrderSchema = new Schema({
    orderDate : { type: Date, default: new Date.now(), required: true },
    details: { type: String, required: true },
    status: { type: String, required: true },
    deliveryTime: { type: String, required: true },
    custId: { type: Schema.ObjectId, ref: 'User', required: true },
    driverId: { type: Schema.ObjectId, required: true, ref: 'Driver' },
    paymentId: { type: Schema.ObjectId, required: true, ref: 'Payment' },
    retailerId: { type: Schema.ObjectId, required: true, ref: 'Retailer' }
})

const CustomerOrderModel = new mongoose.model('CustomerOrder', CustomerOrderSchema)

export default CustomerOrderModel