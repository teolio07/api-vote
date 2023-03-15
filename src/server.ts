//-----------imports
import express from 'express';
import * as dotenv from 'dotenv';
import { apiRouter } from './routes';
import cors from 'cors';
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


//cors
var whitelist = ['http://example1.com', 'http://example2.com','http://localhost']
var corsOptions = {
  origin: function (origin:any, callback:any) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors())



//------router
apiRouter(app)

//----running server

app.listen(port,()=>{console.log(`running server in port ${port}`)})


