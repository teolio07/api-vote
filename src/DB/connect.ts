import mongoose from 'mongoose';

const Uri = process.env.URI || 'mongodb+srv://nodejs-databases:mono19teo@cluster0.08d2x.mongodb.net/votes?retryWrites=true&w=majority';
if(Uri){
    mongoose.connect(Uri)
    .then((resolve)=>{
        console.log(`conectado a: ${resolve.connection.name}`)
      })
    .catch((error)=>{
        console.log("algo salio mal al conectarse a la db")
    })
}