import userService from '../Services/userService.js'
import bcrypt from 'bcryptjs'

const User = userService.user

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        return res.status(200).json({ users: users })
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

export const getOneUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findOne({ _id: id })
        return res.status(200).json({ user: user })
    } catch (error) {
        return res.status(500).json({ message: 'Error', err: error.message })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findOne({ _id: id })
        if (!user) res.status(400).json({ message: "No user found!" })
        else User.deleteOne({ _id: id })
            .then(result => {
                console.log(result)
                res.status(200).json({ message: "Account is deleted Successfully!" })
            })
            .catch(err => {
                console.log(err)
                res.status(500).json({ message: "Error occured while delteting your account", error: err.message })
            })
    } catch (err) {
        res.status(500).json({ message: "User update failed", error: err.message })
    }
}

export const updateUser = (req, res) => {
    const { id } = req.params
    try {
        const updates = req.body
        delete updates["password"] //this function does not update password so this removes any password key from updates
        console.log(updates);
        User.updateOne({ _id: id }, updates)
            .then(isUpdated => {
                console.log(isUpdated);
                if (isUpdated.nModified == 1) return res.status(200).json({ message: "User is updated" })
                return res.status(204)
            })
            .catch(err => {
                res.status(500).json({ message: "User update failed", error: err.message })
            })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "User update failed", error: err.message })
    }
}

export const changePassword = async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findOne({ _id: id })
        if (!user) return res.status(400).json({ message: "No user found!" })
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        User.updateOne({ _id: id }, { password: hashedPassword })
            .then(isUpdated => {
                console.log(isUpdated);
                if (isUpdated.nModified == 1) res.status(200).json({ message: "Password is updated" })
                else res.status(204)
            })
            .catch(err => {
                res.status(500).json({ message: "User Password update failed", error: err.message })
            })
    } catch (err) {
        res.status(500).json({ message: "User Password update failed", error: err.message })
    }
}