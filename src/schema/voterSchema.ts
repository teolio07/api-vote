import Joi from "joi"

const voterSchema = Joi.object({
    id:Joi.string().required(),
    doc:Joi.string().required()
})



export default voterSchema;