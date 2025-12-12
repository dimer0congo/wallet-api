import express from "express"
import { initDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsR from "./routes/transactions.js"
import job from "../cron/cron.js";
import dotenv from "dotenv"
dotenv.config();

const app = express();

if (process.env.NOD_ENV === "production") job.start();

//middleware
app.use(rateLimiter);
app.use(express.json());


const PORT = process.env.PORT || 5001;


app.get("/api/health", (req, res) => {
    res.status(200).json({ status: "ok" });
})
app.use("/api/transactions", transactionsR)

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is up and running P:" + PORT)
    })
})


