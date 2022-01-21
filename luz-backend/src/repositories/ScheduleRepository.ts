import { getRepository } from "typeorm";
import { Schedule } from "../entity/Schedule";

export const ScheduleRepository = {
  findAllSchedules: async () => {
    return await getRepository(Schedule).find();
  },

  addSchedule: async (courseId: string) => {
    const newSchedule = new Schedule();
    newSchedule.course_id = courseId;

    return await getRepository(Schedule).save(newSchedule);
  },
};
