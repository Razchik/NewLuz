import { getRepository } from "typeorm";
import { Schedule } from "../entity/Schedule";
import { Week } from "../entity/Week";

export const WeekRepository = {
  findAllWeeks: async () => {
    await getRepository(Week).find();
  },

  addWeek: async (isVisible: boolean, scheduleId: number) => {
    const newWeek = new Week();
    
    newWeek.is_visible = isVisible;
    newWeek.schedule = await getRepository(Schedule).findOne(scheduleId);

    return await getRepository(Week).save(newWeek);
  },
};
