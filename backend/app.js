import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import Users from './Routes/users.js'
import cors from 'cors'
// if(process.env.NODE_ENV !== "production"){
//     dotenv.config()
// }
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions)); //use it in production to specify origin of access

app.use(cors()) //only use for development
app.use(express.json())

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
mongoose.connect(process.env.MONGOURI, {
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
app.use("/", (req, res) => {
    console.log("home");
    res.send("hello")
})

app.listen(port, (req, res) => console.log(`App running at port ${port}`))