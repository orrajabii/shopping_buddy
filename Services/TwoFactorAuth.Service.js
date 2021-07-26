import TwoFactorAuth, { findOne, updateOne as _updateOne, deleteOne as _deleteOne } from '../models/twoFactorAuth'

const addOne = async (data) => await TwoFactorAuth(data).save()
const getOne = async (id) => await findOne({ userId: id })
const updateOne = async (userId, code) => await _updateOne({ userId: userId }, { code: code })
const deleteOne = async (id) => await _deleteOne({ _id: id })

export const TwoFactorAuthService = {
    addOne: addOne,
    getOne: getOne,
    updateOne: updateOne,
    deleteOne: deleteOne,
}