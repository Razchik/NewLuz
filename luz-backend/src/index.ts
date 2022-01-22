import express = require("express");
import "reflect-metadata";
import { createConnection } from "typeorm";
const ScheduleController = require("./controllers/ScheduleController");

createConnection()
  .then(async (connection) => {
    const app = express();
    app.use(express.json());

    app.use("/schedule", ScheduleController);

    app.listen(3000);
  })
  .catch((error) => console.log(error));
