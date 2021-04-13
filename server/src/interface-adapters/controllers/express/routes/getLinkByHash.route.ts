import express from "express";

const router = express.Router();

router.get("/:id", (_, res) => {
  res.json({ hello: "world" });
});

export const getLinkByHashRoute = router;
