import dotenv from "dotenv"
import connectDB from './db/index.js';
import { app } from "./app.js";

dotenv.config({
    path: './.env'
})


connectDB()
    .then(() => {
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is runing at port: ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("mongo DB connection failed !!!", err);
    })