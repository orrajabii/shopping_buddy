import mongoose from 'mongoose'
const Schema = mongoose.Schema

const cusTypeSchema = new Schema({
    name:{type: String, required: true}
})

export default new mongoose.model('CustomerType', cusTypeSchema)