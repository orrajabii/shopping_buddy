import Driver from '../models/driver.js'
import Address from '../models/address.js'

const addOne = async (data,opt) => await Driver(data).save(opt)
const getOne = async (select, opt) => await Driver.findOne(select).populate(opt)
const updateOne = async (select, updates, opt={}) => await Driver.updateOne(select, updates, opt)
const updateAddress = async (select, updates, opt={}) => await Address.updateOne(select, updates, opt)

export default {
    addOne,
    getOne,
    updateOne,
    updateAddress
}