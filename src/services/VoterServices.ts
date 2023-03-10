import boom from '@hapi/boom';

import { participantModel } from "../DB/models/participantModel";
import { Participant_dto } from "../Dto/participant_dto";
import voter_interface from "../interfaces/voter_interface";

class VoterServices implements voter_interface{
    async vote(id:string,addVote:number){
        try{
            let participant:Participant_dto[] = (await participantModel.find({_id:id}) as Participant_dto[]);
            let allVotes = (participant[0].votes + addVote);
            let voted:Participant_dto = (await participantModel.findByIdAndUpdate(id,{votes:allVotes}) as Participant_dto);
            return voted;
        }
        catch(error){
            return (boom.badData("Error al votar no existe el participante"));
        }
    }
}

export default VoterServices;