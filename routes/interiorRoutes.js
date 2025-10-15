import express from "express";
import { getInterior, createInterior } from "../controllers/interiorController.js";

const router = express.Router();

router.get("/getAll", getInterior);
router.post("/create", createInterior);

export default router;
