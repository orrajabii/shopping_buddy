import CustomerOrderDetails from '../models/customerOrderDetails.js'

const addOne = async (data,opt) => await CustomerOrderDetails(data).save(opt)
const getOne = async opt => await CustomerOrderDetails.findOne(opt)

export default {
    addOne,
    getOne
}