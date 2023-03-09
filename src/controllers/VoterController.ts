import VoterServices from "../services/VoterServices";
import  Express  from "express";
class VoterController {
    vote(req: any,res: { json: (arg0: {message:string}) => void, status: (state:number)=>void}){
        const id:string = req.params.id
        let _voterService = new VoterServices();
        let vote = _voterService.vote(id,1)
        res.json({message:'vote success'})
    }
}

export default VoterController;