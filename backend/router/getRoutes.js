import { Router } from "express";
import getSchedule from "../controllers/getSchedule.js";
import pointTable from "../controllers/getPointsTable.js";
import teamByTeamName from "../controllers/getsquadByteam.js";
import fastLiveScore from "../controllers/getLiveScoreFaster.js";
import liveScore from "../controllers/getLiveScore.js";

const router = Router();

router.get("/schedule", getSchedule);
router.get("/point-table", pointTable);
router.get("/team", teamByTeamName);
router.get("/fast-live-score", fastLiveScore);
router.get("/live-Score", liveScore);

export default router;
