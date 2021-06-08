import mongoose from 'mongoose'
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user");
db.role = require("./role");

db.ROLES = ["user", "admin", "moderator"];

export default db