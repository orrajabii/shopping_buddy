import Shop from '../models/Shops.js';

const addOne = async (shop) => await Shop.save(shop);
const getOne = async (id, options) => await Shop.findOne({ _id: id }).populate(options);
const getAll = async (options) => await Shop.find({}).populate(options);
const updateOne = async (id, updates, options) => await Shop.updateOne({ _id: id }, updates, options);
const deleteShop = async (id, options) => await Shop.deleteOne({ _id: id }, options);

export default {
    addOne, getOne, getAll, updateOne, deleteShop,
}