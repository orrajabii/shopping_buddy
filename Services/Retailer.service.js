import Retailer from '../models/retailer.js'

const addOne = async (data, opt) => await Retailer(data).save(opt)
const getOne = async (opt) => await Retailer.findOne(opt)
const getAll  = async () => await Retailer.find({})
const updateOne = async (select,updates, opt) => await Retailer.updateOne(select, updates).then(opt)
const deleteRetailer = async (select, opt) => await Retailer.deleteOne(select).then(opt)

export default {
    addOne,
    getOne,
    getAll,
    updateOne,
    deleteRetailer
}