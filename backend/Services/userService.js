import mongoose from 'mongoose'
import user from '../models/user.js'
import role from '../models/role.js'

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = user
db.role = role

db.ROLES = ["user", "admin"];

export default db