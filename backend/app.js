import express from 'express'
import mongoose from 'mongoose'
import Users from './Routes/users.js'

const app = express()
const port = process.env.PORT||3000

app.use(express.json())

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://localhost:27017/shopBuddy', {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
app.use("/users", Users)
app.use("/", (req,res) => {
    console.log("home");
    res.send("hello")
})

app.listen(port,(req,res)=> console.log(`App running at port ${port}`))