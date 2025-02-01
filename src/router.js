import express from "express";
import healthHandler from "./handlers/healthHandler.js";
import authMiddleware from "./middleware/authMiddleware.js";
import descHandler from "./handlers/descHandler.js";
const router = express.Router()

// Use authorization middleware for /aboutme.
router.use("/aboutme", authMiddleware)
// Add handlers for routes.
router.get("/", healthHandler)
router.get("/aboutme", descHandler)

export default router