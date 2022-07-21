import express from "express";

const router = express.Router();

router.post("/", async (req, res, next) => {});

router.get("/", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);
    res.json({
      status: "success",
      message: "todo",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
