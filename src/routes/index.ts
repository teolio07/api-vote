import express from 'express';
import { participantsRouter } from './participantsRoutes';
import voterRoutes from './voterRoutes';


export function apiRouter(app: express.Application){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use(participantsRouter);
    router.use(voterRoutes);

}