import { Router } from "express";

import { PlayerIndex, PlayerJoin, PlayerPlay } from "./Routes";

const router = Router();

router.get("/", PlayerIndex);
router.get("/join", PlayerJoin);
router.get("/play", PlayerPlay);

export const PlayerRouter = router;
