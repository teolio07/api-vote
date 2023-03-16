import { typeBoom } from '../Dto/boom_tdo';
import { Participant_dto } from "../Dto/participant_dto";

export interface participant_interface{
    getParticipants:()=>Promise<Participant_dto[] | typeBoom>,
    getParticipant:(id:string)=>Promise<Participant_dto[] | typeBoom>
}