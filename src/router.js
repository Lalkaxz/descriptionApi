import express from "express";
import { healthHandler } from "./handlers/healthHandler";

const router = express.Router()

router.use(express.json)

router.get("/", healthHandler)
router.get("/aboutme", )