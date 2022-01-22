import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Day } from "./Day";

@Entity("time_slot", { schema: "luz" })
export class Timeslot {
  @PrimaryGeneratedColumn()
  slot_id: number;

  @Column("time without time zone")
  start_time: string;

  @Column("time without time zone")
  end_time: string;

  @Column("text")
  subject: string;

  @Column("text")
  responsible_commander: string;

  @Column("text")
  description: string;

  @ManyToOne(() => Day, (day) => day.timeslots)
  day: Day;
}
