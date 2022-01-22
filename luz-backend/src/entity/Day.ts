import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Timeslot } from "./Timeslot";
import { Week } from "./Week";

@Entity("day", { schema: "luz" })
export class Day {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("date")
  date: string;

  @ManyToOne(() => Week, (week) => week.days)
  week: Week;

  @OneToMany(() => Timeslot, (timeslot) => timeslot.day)
  timeslots: Timeslot[];
}
