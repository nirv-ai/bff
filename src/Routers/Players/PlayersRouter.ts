import { Router } from "express";

import { PlayerGetRoute, PlayerJoinRoute, PlayerPlayRoute } from "./Routes";
import {
  PlayerJoinValidator,
  PlayerPlayValidator,
  PlayerGetValidator,
} from "../../Middleware";
import { AsyncWrapper } from "../AsyncWrapper";

const router = Router();

router.get("/:callsign", PlayerGetValidator, AsyncWrapper(PlayerGetRoute));
router.post("/join", PlayerJoinValidator, AsyncWrapper(PlayerJoinRoute));
router.post("/play", PlayerPlayValidator, AsyncWrapper(PlayerPlayRoute));

export const PlayersRouter = router;
