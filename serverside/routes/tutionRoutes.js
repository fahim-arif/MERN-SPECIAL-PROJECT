import express from "express";
import { getTutorDetails, getTutors } from "../controller/tutionController.js";

const router = express.Router();

router.route("/tutors").get(getTutors);
router.route("/tutor/:id").get(getTutorDetails);

export default router;

