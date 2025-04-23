import { Router } from "express";
import getSchedule from "../controllers/getSchedule.js";


const router = Router();

router.get("/schedule", getSchedule);

export default router;
