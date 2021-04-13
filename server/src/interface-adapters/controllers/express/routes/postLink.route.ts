import express from "express";

const router = express.Router();

router.post("/generate", (_, res) => {
  res.json({ not: "world" });
});

export const postLinkRoute = router;
