import * as express from "express";
import { Request, Response } from "express";
import { ScheduleService } from "../services/ScheduleService";

const app = express();
app.use(express.json());

//* Register Routes

app.get("/all", async (req: Request, res: Response) => {
  const schedules = await ScheduleService.getAllSchedules();
  res.json(schedules);
});

app.post("/add/:course_id", async (req: Request, res: Response) => {
  const newSchedule = await ScheduleService.addSchedule(req.params.course_id);
  res.json(newSchedule);
});

module.exports = app;
