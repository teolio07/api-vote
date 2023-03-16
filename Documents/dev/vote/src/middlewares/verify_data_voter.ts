import Express  from "express";
import voterSchema from "../schema/voterSchema";


const verifyDataVoter= (req:Express.Request,res:Express.Response,next:Express.NextFunction) =>{ 
        //validate data voter
        const { error  } = voterSchema.validate(req.params)
     
        if(error) {
            return res.status(400).json( 
                {error: error.details[0].message}
            )
        }else{
            next();
        }
}

export default verifyDataVoter;