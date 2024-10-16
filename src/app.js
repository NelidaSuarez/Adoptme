import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import router from "./routes/index.js"
import { errorHandle } from './errors/errHandle.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect(`mongodb://localhost:27017/Adoptme`)

app.use(express.json());
app.use(cookieParser());

app.use('/api',router);


//middleware de manejo de errores
app.use(errorHandle);


app.listen(PORT,()=>console.log(`Listening on ${PORT}🎇`))
