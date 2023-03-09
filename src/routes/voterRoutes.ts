import express from 'express';
import VoterController from '../controllers/VoterController';

//controllers
const _voterController = new VoterController();

const voterRoutes:express.Application = express();

voterRoutes.patch('/voters/:id',_voterController.vote)


export default voterRoutes;