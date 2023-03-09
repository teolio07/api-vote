import { participantModel } from "../DB/models/participantModel";
import { Participant_dto } from "../Dto/participant_dto";
import { participant_interface } from "../interfaces/participant_interface";

export class ParticipantServices implements participant_interface{
  async getParticipants():Promise<Participant_dto[]>{
      let participants:Participant_dto[] = await participantModel.find();
    return participants
  }    

  async getParticipant(id:string):Promise<Participant_dto[]>{
    let participant:Participant_dto[] = (await participantModel.find({_id:id}) as Participant_dto[]);
    return participant
  }

  async createParticipant(participantObj:Participant_dto):Promise<Participant_dto> {
    let participant = new participantModel();
    participant.name = participantObj.name;
    participant.image = participantObj.image;
    participant.votes = 0;
    let saveParcipant = (await participant.save() as Participant_dto); 
    return saveParcipant;
  }

  

  


}