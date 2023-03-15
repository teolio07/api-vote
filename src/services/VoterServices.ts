import boom from '@hapi/boom';

import { participantModel } from "../DB/models/participantModel";
import { voterModel } from '../DB/models/voterModel';
import { typeBoom } from '../Dto/boom_tdo';

import { Participant_dto } from "../Dto/participant_dto";
import { voter_dto } from '../Dto/voter_dto';

import voter_interface from "../interfaces/voter_interface";

class VoterServices implements voter_interface{

    async createVoter(voterObj:voter_dto):Promise<voter_dto | typeBoom>{
        let voterCreate = new voterModel();
        voterCreate.document = voterObj.document;
        voterCreate.status = voterObj.status
        let voter = (await voterCreate.save() as voter_dto)
        return voter
    }


    async documentVerify(document:string):Promise<voter_dto[] | typeBoom>{
        try{
            let _verificationVoter:voter_dto[] = (await voterModel.findOne({document:document}) as voter_dto[])
/*             if(_verificationVoter == null){
                return (boom.notFound("No estas registrado"));
            } */
            return _verificationVoter;
        
        }
        catch(error){
            console.log(error)
            return (boom.notFound("No estas registrado"));
        }
    }

    async vote(id:string,addVote:number,doc:string){
        try{
            let participant:Participant_dto[] = (await participantModel.find({_id:id}) as Participant_dto[]);
            let _verificationVoter:voter_dto[] = (await voterModel.find({document:doc}) as voter_dto[])

            if(_verificationVoter[0].status == true){
                let allVotes = (participant[0].votes + addVote);
                let ChangeVoterStatus = (await voterModel.findOneAndUpdate({document:doc},{status:false}) as voter_dto[])
                let voted:Participant_dto = (await participantModel.findByIdAndUpdate(id,{votes:allVotes}) as Participant_dto);
                return voted;
            }else{
                return (boom.notFound("Error no puedes volver a votar"));
            }

        }
        catch(error){
            console.log(error)
            return (boom.notFound("Error no se pudo realizar el voto, vuelve a intentarlo"));
        }
    }
}

export default VoterServices;