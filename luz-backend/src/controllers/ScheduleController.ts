import * as express from "express";
import { Request, Response } from "express";
import { createConnection } from "typeorm";
import { ScheduleService } from "../services/ScheduleService";

export const ScheduleController = {
  initController: () => {
    // create and setup express app
    const app = express();
    app.use(express.json());

    // register routes

    app.get("/schedule/all", async (req: Request, res: Response) => {
      const schedules = await ScheduleService.getAllSchedules();
      res.json(schedules);
    });

    app.post(
      "/schedule/add/:course_id",
      async (req: Request, res: Response) => {
        const newSchedule = await ScheduleService.addSchedule(
          req.params.course_id
        );
        res.json(newSchedule);
      }
    );
  },
};

// createConnection().then((connection) => {
//   // create and setup express app
//   const app = express();
//   app.use(express.json());

//   // register routes

//   app.get("/schedule/all", async (req: Request, res: Response) => {
//     const schedules = await ScheduleService.getAllSchedules();
//     res.json(schedules);
//   });

//   app.post("/schedule/add/:course_id", async (req: Request, res: Response) => {
//     const newSchedule = await ScheduleService.addSchedule(req.params.course_id);
//     res.json(newSchedule);
//   });
// });
