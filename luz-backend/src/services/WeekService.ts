import { WeekRepository } from "../repositories/WeekRepository";


export const WeekService = {
  getAllWeeks: async () => {
    return await WeekRepository.findAllWeeks();
  },

  addWeek: async (isVisible: boolean, scheduleId: number) => {
    return await WeekRepository.addWeek(isVisible, scheduleId);
  },
};
