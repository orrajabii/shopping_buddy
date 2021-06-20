import CustomerType from '../models/customerType.js'

const addOne = async (data,opt) => await CustomerType(data).save(opt)
const getOne = async opt => await CustomerType.findOne(opt)

export default {
    addOne,
    getOne
}