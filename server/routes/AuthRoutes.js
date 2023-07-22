import { Router } from "express";
import { checkUser, generateToken, getAllUsers, onBoardUser } from "../controllers/AuthController.js";

const router = Router();

router.post("/check-user", checkUser);
router.post("/onboard-user", onBoardUser);
router.get("/get-contacts", getAllUsers);
/* ZegoCloud Voice & Video Calls start */
router.get("/generate-token/:userId", generateToken);
/* ZegoCloud Voice & Video Calls end */

export default router;