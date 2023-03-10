import { typeBoom } from "../Dto/boom_tdo";
import { Participant_dto } from "../Dto/participant_dto";
import { ParticipantServices } from "../services/ParticipantServices";
const participant = new ParticipantServices();

export class participantController{
    getParticipants(req: any,res: { json: (arg0: Participant_dto[] | typeBoom) => void; status: (state:number)=>void}){
    
      try{
        let get_participants = participant.getParticipants();
        get_participants.then((resolve)=>{
          let castingResolve = (resolve as typeBoom)
          if(castingResolve.isBoom == true){
              res.status(422);
              res.json(castingResolve);
          }else{
              res.status(200)
              res.json(resolve)
          }
        })  
      }
      catch(error){
        console.log(error);
      } 
    }

      getParticipant(req: any,res: { json: (arg0: Participant_dto[] | typeBoom) => void; status: (state:number)=>void}){
        const {id} = req.params
        let get_participant = participant.getParticipant(id);
        get_participant.then((resolve)=>{
          let castingResolve = (resolve as typeBoom)
          if(castingResolve.isBoom == true){
              res.status(422);
              res.json(castingResolve);
          }else{
              res.status(200)
              res.json(resolve)
          }
        }) 
      }

      createParticipant(req: any,res: { json: (arg0: Participant_dto | typeBoom) => void, status: (state:number)=>void}){
        let participantObj = req.body;
        let participantCreate = participant.createParticipant(participantObj);
        participantCreate.then((resolve)=>{
          let castingResolve = (resolve as typeBoom)
          if(castingResolve.isBoom == true){
              res.status(422);
              res.json(castingResolve);
          }else{
              res.status(201)
              res.json(resolve)
          }
        }) 
      }

      

}