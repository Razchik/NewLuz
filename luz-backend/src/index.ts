import express = require("express");
import "reflect-metadata";
import { createConnection } from "typeorm";
import { ScheduleController } from "./controllers/ScheduleController";

createConnection()
  .then(async (connection) => {
    const app = express();
    app.use(express.json());
    
    ScheduleController.initController();

    app.listen(3000);
    // console.log("Inserting a new Schedule into the database...");

    // const schedule = new Schedule();
    // schedule.course_id = "S";

    // await connection.manager.save(schedule);

    // console.log("Saved a new schedule with id: " + schedule.schedule_id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(Schedule);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");
    
  })
  .catch((error) => console.log(error));
