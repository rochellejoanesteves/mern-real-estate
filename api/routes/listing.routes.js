import express from "express";
import { createLisiting, deleteListing } from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createLisiting);
router.delete("/delete/:id", verifyToken, deleteListing)

export default router;
