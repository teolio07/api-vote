import mongoose, {Schema} from "mongoose";
import { participant_interface } from "../../interfaces/participant_interface";

const participantSchema = new Schema({
    name:String,
    age:Number
})

export const participantModel = mongoose.model('Participant', participantSchema);