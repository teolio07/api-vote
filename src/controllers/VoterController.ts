import { typeBoom } from "../Dto/boom_tdo";
import { voter_dto } from "../Dto/voter_dto";
import VoterServices from "../services/VoterServices";

class VoterController {

    createVoter(req:any, res:{json:(arg0:voter_dto | typeBoom) => void, status:(state:number)=>void}){
        let _voterService = new VoterServices();
        let voterObj = req.body

        let createVoter = _voterService.createVoter(voterObj)
        createVoter.then((resolve)=>{
            let castingResolve = (resolve as typeBoom)
            if(castingResolve.isBoom == true){
                res.status(422);
                res.json(castingResolve);
            }else{
                let castingResolve = (resolve as voter_dto)
                res.status(201);
                res.json(castingResolve);
            }
        })
    }
    
    verifyDocument(req:any, res:{json:(arg0:voter_dto[] | typeBoom) => void, status:(state:number)=>void}){
        let _voterService = new VoterServices();

        let doc = req.params.doc;
        let verification = _voterService.documentVerify(doc);
        verification.then((resolve)=>{
            let castingResolve = (resolve as typeBoom)
            console.log(castingResolve)
            if(castingResolve.isBoom == true){
                res.status(422);
                res.json(castingResolve);
            }else{
                let castingResolve = (resolve as voter_dto[])

                res.status(201);
                res.json(castingResolve);
            }
        })
    }

    vote(req: any,res: { json: (arg0: {message:string} | typeBoom) => void, status: (state:number)=>void}){
        let _voterService = new VoterServices();

        let id:string = req.params.id
        let doc:string = req.params.doc
        let vote = _voterService.vote(id,1,doc)
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