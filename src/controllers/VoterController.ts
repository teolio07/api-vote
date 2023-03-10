import { typeBoom } from "../Dto/boom_tdo";
import VoterServices from "../services/VoterServices";
class VoterController {
    vote(req: any,res: { json: (arg0: {message:string} | typeBoom) => void, status: (state:number)=>void}){
        let id:string = req.params.id
        let _voterService = new VoterServices();
        let vote = _voterService.vote(id,1)
        vote.then((resolve)=>{
            let castingResolve = (resolve as typeBoom)
            if(castingResolve.isBoom == true){
                res.status(422);
                res.json(castingResolve);
            }else{
                res.status(201);
                res.json({message:"Voto exito"});
            }
        })
    }
}

export default VoterController;