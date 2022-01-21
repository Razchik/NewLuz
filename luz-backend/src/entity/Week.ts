import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import { Day } from "./Day";
import { Schedule } from "./Schedule";

@Entity("week", {"schema": "luz"})
export class Week {

    @PrimaryGeneratedColumn()
    week_id: number;

    @Column('bool')
    is_visible: boolean;

    @ManyToOne(() => Schedule, schedule => schedule.weeks)
    schedule: Schedule;

    @OneToMany(() => Day, day => day.week)
    days: Day[];
}