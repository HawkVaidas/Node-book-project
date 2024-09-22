

import express from'express';
import auth from "../middleware/auth.js";

import {CREATE_USER,LOGIN,GET_USER_BY_ID,DELETE_USER_BY_ID,VALIDATE_LOGIN,} from "../controller/user.js";

const router = express.Router();
//----------------------------------------------------------------
router.post("/user", CREATE_USER);
router.post("/login", LOGIN);
router.get("/login/validate", auth, VALIDATE_LOGIN);
router.get("/user/:id", GET_USER_BY_ID);
router.delete("/user/:id", DELETE_USER_BY_ID);

export default router;