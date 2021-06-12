import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'

const router = express.Router()

//dummy login , will use password or somthing other for session management
//does not maintain session right now

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body);
        if (email == null || email == undefined) throw new Error("Email cannot be emtpy!")
        if (password == null || password == undefined) throw new Error("Password cannot be empty!")
        const user = await User.findOne({ email: email });
        if (!user) return res.status(404).json({ "message": "User not found" })
        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            console.log("User logged in");
            return res.status(200).json({ "message": "user auth successfull" })
        } else {
            throw new Error("Password did not match!")
        }

    } catch (err) {
        console.error(err);
        res.status(500).json({ "error": err.message })
    }
})

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body
        console.log(req.body);
        if (password == null || password == undefined || username == null || username == undefined || email == null || email == undefined) throw new Error("Empty fields are not allowed")
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: hashPassword
        })
        newUser.save((err, user) => {
            if (err) throw new Error(err.message)
            res.status(201).json({ "message": "user Created", "User": user })
        }).catch(err => res.status(500).json({ "error": err.message }))
    } catch (err) {
        res.status(500).json({ "error": err.message })
    }
})

export default router