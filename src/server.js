import express from "express"
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsR from "./routes/transactions.js"

import dotenv from "dotenv"
dotenv.config();

const app = express();

//middleware
app.use(rateLimiter);
app.use(express.json());


const PORT = process.env.PORT || 5001;


app.use("/api/transactions", transactionsR)

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is up and running P:" + PORT)
    })
})


