import { Router } from "express";
import getSchedule from "../controllers/getSchedule.js";
import pointTable from "../controllers/getPointsTable.js";


const router = Router();

router.get("/schedule", getSchedule);
router.get("/point-table", pointTable);

export default router;
