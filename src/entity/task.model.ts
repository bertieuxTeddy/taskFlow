import {Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

enum TaskStatus {
    TODO = "TODO",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
}

export class Task{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        type: 'string'
    })
    name: string;

    @Column({
        nullable: true,
        type: 'string'
    })
    description: string;

    @Column({
        default: false,
        type: "boolean"
    })
    isAffected: boolean;

    @Column({
        default: "TODO",
        type: "enum"
    })
    status: TaskStatus;

    @Column({
        nullable: true,
        type: 'datetime'
    })
    deadline: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}