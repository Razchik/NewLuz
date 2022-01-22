import { WeekRepository } from "../repositories/WeekRepository";


export const ScheduleService = {
  getAllWeeks: async () => {
    await WeekRepository.findAllWeeks();
  },

  addWeek: async (isVisible: boolean, scheduleId: number) => {
    await WeekRepository.addWeek(isVisible, scheduleId);
  },
};
