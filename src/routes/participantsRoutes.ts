import express from 'express';
import { participantController } from '../controllers/participantControllers';

//------controllers
const _participantController = new participantController();

//-------
export const participantsRouter:express.Application = express();

participantsRouter.get('/participants',_participantController.getParticipants); 
participantsRouter.get('/participants/:id',_participantController.getParticipant);
participantsRouter.post('/participants/:id',_participantController.createParticipant)



participantsRouter.delete('/participants/:name',(req,res)=>{res.send('eliminado')})

