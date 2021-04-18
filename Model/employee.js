const mongoose=require('mongoose')

const schema = mongoose.Schema(
    {
        name:
        {
            type:String,
            require:true,
            minlength:3
        },
        email:
        {
            type:String,
            require:true,
            minlength:5,
            unique:true
        },
        password:
        {
            type:String,
            minlength:3,
            require:true
        },
        city:
        {
            type:String,
            require:true,
            minlength:2
        },
        address:
        {
            type:String,
            require:true,
            minlength:2
        }
    },
    {
        timestamps:true
    }
)                            
module.exports = mongoose.model("employees",schema)