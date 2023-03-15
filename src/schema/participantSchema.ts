import Joi from "joi"

const participantSchema = Joi.object({
    name:Joi.string().required(),
    image:Joi.string().required()
})



export default participantSchema;