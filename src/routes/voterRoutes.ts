import express from 'express';
import VoterController from '../controllers/VoterController';

//controllers
const _voterController = new VoterController();

const voterRoutes:express.Application = express();

voterRoutes.patch('/voters/:id/:doc',_voterController.vote)
voterRoutes.get('/voters/:doc',_voterController.verifyDocument)


export default voterRoutes;