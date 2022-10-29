import { Router } from "express";

import { PathGetRoute } from "./Routes";
import { PathGetValidator } from "../../Middleware";
import { AsyncWrapper } from "../AsyncWrapper";

const router = Router();

router.post("/", PathGetValidator, AsyncWrapper(PathGetRoute));

export const PathsRouter = router;
