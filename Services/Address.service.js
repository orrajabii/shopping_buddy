import Address from '../models/address.js'

const add = async (objectData, options) => new Address(objectData).save(options)

const updateOne = async (criteria, objectData, options) => Address.updateOne(criteria, objectData, options)

export default {
    add,
    updateOne
}