import {Router} from "express";
import { clockInOut, getAttendance } from "../controllers/attendanceController.js";

const attendanceRouter = Router();

attendanceRouter.get("/", getAttendance);
attendanceRouter.post("/", clockInOut)

export default attendanceRouter;