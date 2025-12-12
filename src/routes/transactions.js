import e from "express";
import {
    getTransationsByUserId,
    createTransactions,
    deleteTransationsById,
    getTransactionsSummary
} from "../controllers/transactions.js"

const router = e.Router();

router.get("/:userId", getTransationsByUserId)

router.post("/", createTransactions);

router.delete("/:id", deleteTransationsById)

router.get("/summary/:userId", getTransactionsSummary)

export default router; 