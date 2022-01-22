import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Week } from "./Week";

@Entity("schedule", { schema: "luz" })
export class Schedule {
  @PrimaryGeneratedColumn()
  schedule_id: number;

  @Column("text")
  course_id: string;

  @OneToMany(() => Week, (week) => week.schedule)
  weeks: Week[];
}
