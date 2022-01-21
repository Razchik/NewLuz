import { ScheduleRepository } from "../repositories/ScheduleRepository";

export const ScheduleService = {
  getAllSchedules: async () => {
    return await ScheduleRepository.findAllSchedules();
  },

  addSchedule: async (courseId: string) => {
    return await ScheduleRepository.addSchedule(courseId);
  },
};
