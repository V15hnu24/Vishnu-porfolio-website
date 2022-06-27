import mongoose from 'mongoose';

console.log('in models and postmessage');
const postSchema = new mongoose.Schema({
    name: String,
    message: String,
    email: String,
    phone: Number,
    submitedon:{
        type: Date,
        default: Date.now
    }
});

const ex = mongoose.model('table1',postSchema);
export default ex;