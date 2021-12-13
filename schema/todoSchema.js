import  Mongoose  from 'mongoose';
const {Schema,model}=Mongoose;
const todoSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type: Boolean,
        default: false,
        required:true
    },
    date_time:{
        type: String,
        required:true
    }
});

const Todo=model('Todo', todoSchema);
export{Todo};
