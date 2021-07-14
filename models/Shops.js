import mongoose from 'mongoose'

const ShopsModel = new mongoose.Schema({
    shopName: { type: 'string', required: true },
    shopDescription: { type: 'string', required: true },
    longURL: { type: 'string', required: true },
    bannerURL: { type: 'string', required: true },
    address: { type: 'string', required: true },
    phone: { type: 'string', required: true },
    email: { type: 'string', required: true },
    products: [{ type: mongoose.Types.ObjectId, ref: 'Product' }],
})

export default mongoose.model('Shop', ShopsModel);