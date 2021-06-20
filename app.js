import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import test from './Routes/Test.js'
import routes from './Routes/index.routes.js'
import cors from 'cors'
import db from './Services/userService.js'
dotenv.config()

const app = express()

const port = process.env.PORT || 3000
const Role = db.role

// var corsOptions = {
//     origin: "http://localhost:8081"
// };
//
// app.use(cors(corsOptions)); //use it in production to specify origin of access

app.use(cors()) //only use for development
app.use(express.json())

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
db.mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });


// app.use("/users", Users)
routes(app)
test(app)
app.use("/", (req, res) => {
    console.log("home");
    res.send("hello")
})

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        const types = ["user", "admin", "retailer", "driver"]
        for(let type of types){
          new Role({
            name: type
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
            console.log(`added '${type}' to roles collection`);
          });
        }
      }
    });
  }

app.listen(port, () => console.log(`App running at port ${port}`))