import { typeBoom } from "../Dto/boom_tdo";
import { Participant_dto } from "../Dto/participant_dto";

interface voter_interface{
    vote: (id:string,addVote:number)=>Promise<Participant_dto | typeBoom>
}

export default voter_interface;