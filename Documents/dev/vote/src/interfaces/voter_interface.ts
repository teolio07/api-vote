import { typeBoom } from "../Dto/boom_tdo";
import { Participant_dto } from "../Dto/participant_dto";
import { voter_dto } from "../Dto/voter_dto";

interface voter_interface{
    vote: (id:string,addVote:number,doc:string)=>Promise<Participant_dto | typeBoom>,
    documentVerify:(document:string)=>Promise<voter_dto[] | typeBoom>,
    createVoter:(voterObj:voter_dto)=>Promise<voter_dto | typeBoom>

}

export default voter_interface;