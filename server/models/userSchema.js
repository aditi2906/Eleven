const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    phone_no:Number,
    password:String,
    puzzle_score:{
        type : Number , 
        default : 0
    },
    video_score:{
        type : Number , 
        default : 0
    },
    active_days:{
        type : Number , 
        default : 0
    }
});

module.exports=mongoose.model('users',userSchema);