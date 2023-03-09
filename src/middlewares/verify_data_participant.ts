import Express  from "express";
import participantSchema from "../schema/participantSchema";


const verifyDataParticipant= (req:Express.Request,res:Express.Response,next:Express.NextFunction) =>{ 
        //validate data participant
        const { error  } = participantSchema.validate(req.body)
     
        if(error) {
            return res.status(400).json( 
                {error: error.details[0].message}
            )
        }else{
            next();
        }
}

export default verifyDataParticipant;