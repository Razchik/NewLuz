import { ScheduleRepository } from "../repositories/ScheduleRepository";

export const ScheduleService = {
  getAllSchedules: async () => {
    await ScheduleRepository.findAllSchedules();
  },

  addSchedule: async (courseId: string) => {
    await ScheduleRepository.addSchedule(courseId);
  },
};
