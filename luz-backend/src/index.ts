import "reflect-metadata";
import {createConnection} from "typeorm";
import {Schedule} from "./entity/Schedule";
import {Week} from "./entity/Week";
import {Day} from "./entity/Day";
import {Timeslot} from "./entity/Timeslot";

createConnection().then(async connection => {

    console.log("Inserting a new Schedule into the database...");

    const schedule = new Schedule();
    schedule.course_id = "S";

    await connection.manager.save(schedule);
    console.log("Saved a new schedule with id: " + schedule.schedule_id);

    console.log("Loading users from the database...");
    const users = await connection.manager.find(Schedule);
    console.log("Loaded users: ", users);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
