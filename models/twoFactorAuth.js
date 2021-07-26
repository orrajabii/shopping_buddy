import mongoose from 'mongoose';

const authSchema = mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    code: { type: String, required: true },
})
export default  new mongoose.model('TwoFactorAuth', authSchema)