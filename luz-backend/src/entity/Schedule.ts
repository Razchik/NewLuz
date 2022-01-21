import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Schedule {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    courseId: string;

}
