import mongoose, {Schema} from "mongoose";

const participantSchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    age: Number
})

export const participantModel = mongoose.model('Participant', participantSchema);