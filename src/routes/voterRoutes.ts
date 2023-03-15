import express from 'express';
import VoterController from '../controllers/VoterController';
import verifyDataVoter from '../middlewares/verify_data_voter';

//controllers
const _voterController = new VoterController();

const voterRoutes:express.Application = express();

voterRoutes.post('/voters',_voterController.createVoter)
voterRoutes.patch('/voters/:id/:doc',verifyDataVoter,_voterController.vote)
voterRoutes.get('/voters/:doc',_voterController.verifyDocument)



export default voterRoutes;