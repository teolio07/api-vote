//-----------imports
import express from 'express';
import * as dotenv from 'dotenv';
import { apiRouter } from './routes';

//----Conection
import './DB/connect'

//--------------------

//----Settings
dotenv.config();
//----constants
const app = express();
const port = process.env.PORT || 4002



//uses
app.use(express.json());


app.get('/',(req,res)=>{})

//------router
apiRouter(app)

//----running server

app.listen(port,()=>{console.log(`running server in port ${port}`)})


