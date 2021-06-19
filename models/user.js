import mongoose from 'mongoose'
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    username:{
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
    ],
    customerOrderId : [{type: mongoose.Schema.ObjectId, ref: 'CustomerOrderId'}],
    customerType: [{type: mongoose.Schema.ObjectId, ref: 'CustomerType'}]
},{
    timestamps:true
});

//Export the model
export default mongoose.model('User', userSchema);