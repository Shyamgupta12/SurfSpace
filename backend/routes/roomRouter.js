import { Router } from "express";

import { createRoom } from "../controllers/room.js";
import auth from "../middlewares/auth.js";

const roomRouter= Router();
roomRouter.post('/', auth ,createRoom)
export default roomRouter;
 