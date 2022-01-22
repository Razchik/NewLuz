import * as express from "express";
import { Request, Response } from "express";
import { WeekService } from "../services/WeekService";

const app = express();
app.use(express.json());

//* Register Routes

app.get("/all", async (req: Request, res: Response) => {
  const weeks = await WeekService.getAllWeeks();
  res.json(weeks);
});

app.post(
  "/add/:is_visible/:schedule_id",
  async (req: Request, res: Response) => {
    const newWeek = await WeekService.addWeek(
      JSON.parse(req.params.is_visible),
      Number(req.params.schedule_id)
    );
    res.json(newWeek);
  }
);

module.exports = app;
