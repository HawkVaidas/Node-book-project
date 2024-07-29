

import express from'express';

import {CREATE_USER,LOGIN,GET_USER_BY_ID,DELETE_USER_BY_ID,} from "../controller/user.js";

const router = express.Router();
//----------------------------------------------------------------
router.post("/user", CREATE_USER);
router.post("/login", LOGIN);
router.get("/user/:id", GET_USER_BY_ID);
router.delete("/user/:id", DELETE_USER_BY_ID);

export default router;