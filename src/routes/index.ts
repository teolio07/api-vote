import express from 'express';
import { participantsRouter } from './participantsRoutes';


export function apiRouter(app: express.Application){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use(participantsRouter);
    router.use(app.get('/voters',(req,res)=>{res.send("hello voter")}));

}