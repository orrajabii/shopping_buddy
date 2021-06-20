import mongoose from 'mongoose'
// Declare the Schema of the Mongo model
var adminSchema = new mongoose.Schema({
    adminname:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    address:[{type : mongoose.Schema.Types.ObjectId, ref:'Address'}],
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    roles: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Role"
        }
    ]
},{
    timestamps:true
});

//Export the model
export default mongoose.model('admin', adminSchema);