import { Participant_dto } from "../Dto/participant_dto";
import { ParticipantServices } from "../services/ParticipantServices";
const participant = new ParticipantServices();

export class participantController{
    getParticipants(req: any,res: { json: (arg0: Participant_dto[]) => void; }){
        let get_participants = participant.getParticipants();
        get_participants.then((resolve)=>{
          res.json(resolve)
        })   
      }

      getParticipant(req: any,res: { json: (arg0: Participant_dto[]) => void}){
        const {id} = req.params
        let get_participant = participant.getParticipant(id);
        get_participant.then((resolve)=>{
          res.json(resolve)
        }) 
      }

      createParticipant(req: any,res: { json: (arg0: Participant_dto) => void, status: (state:number)=>void}){
        let participantObj = req.body;
        let participantCreate = participant.createParticipant(participantObj);
        participantCreate.then((resolve)=>{
          res.status(200)
          res.json(resolve)
        }) 
      }

      

}