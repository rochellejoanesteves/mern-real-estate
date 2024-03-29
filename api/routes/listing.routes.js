import express from "express";
import {
  createLisiting,
  deleteListing,
  updateListing,
  getListing,
  getListings
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createLisiting);
router.delete("/delete/:id", verifyToken, deleteListing);
router.post("/update/:id", verifyToken, updateListing);
router.get("/getListing/:id", getListing);
router.get("/get", getListings);

export default router;
