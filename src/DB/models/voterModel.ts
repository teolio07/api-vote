import mongoose from 'mongoose';

const voterSchema = new  mongoose.Schema({
    document:String,
    status:Boolean,
})


export const voterModel = mongoose.model('Voters',voterSchema);