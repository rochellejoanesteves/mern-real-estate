import Listing from "../models/listing.model.js";

export const createLisiting = async (req, res, next) => {
  try {
    const createLisiting = await Listing.create(req.body);
    return res.status(201).json(createLisiting)
  } catch (error) {
    next(error);
  }
};
