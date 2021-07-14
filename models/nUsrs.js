import mongoose from 'mongoose'

const UserModelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    shops: [{ type: mongoose.Types.ObjectId, ref: 'Shops' }],
    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role"
        }
    ],
})

export default mongoose.model('User', UserModelSchema);