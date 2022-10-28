import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("player router index");
});

export const PlayerRouter = router;
