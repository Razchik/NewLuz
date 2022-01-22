import express = require("express");
import "reflect-metadata";
import { createConnection } from "typeorm";
const ScheduleController = require("./controllers/ScheduleController");
const WeekController = require("./controllers/WeekController");

createConnection()
  .then(async (connection) => {
    const app = express();
    app.use(express.json());

    app.use("/schedule", ScheduleController);
    app.use("/week", WeekController);

    app.listen(3000);
  })
  .catch((error) => console.log(error));
