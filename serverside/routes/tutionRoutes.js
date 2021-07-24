import express from "express";

import { getTutors } from "../controller/tutionController.js";

const router = express.Router();
router.route("/").get(getTutors);

export { router };
