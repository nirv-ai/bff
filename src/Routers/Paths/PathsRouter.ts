import { Router } from "express";

import { PathGetRoute, PathsGetRoute } from "./Routes";
import { PathGetValidator, PathsGetValidator } from "../../Middleware";
import { AsyncWrapper } from "../AsyncWrapper";

const router = Router();

router.get("/", PathsGetValidator, AsyncWrapper(PathsGetRoute));
router.get("/:name", PathGetValidator, AsyncWrapper(PathGetRoute));

export const PathsRouter = router;
