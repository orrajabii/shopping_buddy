import mongoose from 'mongoose'
const Schema = mongoose.Schema

const CustomerOrderSchema = new Schema({
    orderDate : { type: Date, default: new Date.now(), required: true },
    details: { type: Schema.Types.ObjectId, ref: 'CustomerOrderDetail', required: true },
    status: { type: String, required: true },
    deliveryTime: { type: String, required: true },
    custId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    driverId: { type: Schema.Types.ObjectId, required: true, ref: 'Driver' },
    paymentId: { type: Schema.Types.ObjectId, required: true, ref: 'Payment' },
    retailerId: { type: Schema.Types.ObjectId, required: true, ref: 'Retailer' }
})

const CustomerOrderModel = new mongoose.model('CustomerOrder', CustomerOrderSchema)

export default CustomerOrderModel