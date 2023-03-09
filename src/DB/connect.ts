import mongoose from 'mongoose';

const Uri = process.env.URI;
if(Uri){
    mongoose.connect(Uri)
    .then((resolve)=>{
        console.log(`conectado a: ${resolve.connection.name}`)
      })
    .catch((error)=>{
        console.log("algo salio mal al conectarse a la db")
    })
}