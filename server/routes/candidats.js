import express from "express";
import { getCandidats,search } from "../controllers/candidat.js";


const router = express.Router();

//create a video

router.get("/getCandidats", getCandidats)
router.get("/search", search)

export default router;
