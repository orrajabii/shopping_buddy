import mongoose from 'mongoose'
const Schema = mongoose.Schema

const DriverSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    contactNo: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address:[{type : mongoose.Schema.Types.ObjectId, ref:'Address'}],
    customerOrder: [{type: Schema.Types.ObjectId, ref: 'CustomerOrder'}],
    licenceNum: {type: String, required: true},
    dlExpiredDate: {type: Date, required: true},
})

const DriverModel = new mongoose.model('Driver', DriverSchema)

export default DriverModel