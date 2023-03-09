import { Participant_dto } from "../Dto/participant_dto";

export interface participant_interface{
    getParticipants:()=>Promise<Participant_dto[]>,
    getParticipant:(id:string)=>Promise<Participant_dto[]>
}