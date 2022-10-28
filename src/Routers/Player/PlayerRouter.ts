import { Router } from "express";

import { PlayerIndex, PlayerJoin, PlayerPlay } from "./Routes";
import { PlayerJoinValidator } from "../../Middleware";
import { AsyncWrapper } from "../AsyncWrapper";

const router = Router();

router.get("/", PlayerIndex);
router.post("/join", PlayerJoinValidator, AsyncWrapper(PlayerJoin));
router.post("/play", PlayerPlay);

export const PlayerRouter = router;
