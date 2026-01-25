import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

export enum PermissionType {
    TASK_READ_ACCESS = "TASK_READ_ACCESS",
    TASK_CREATE_ACCESS = "TASK_WRITE_ACCESS",
    TASK_DELETE_ACCESS = "TASK_DELETE_ACCESS",
    TASK_UPDATE_ACCESS = "TASK_UPDATE_ACCESS",
}

@Entity()
export class Permission {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: PermissionType,
        default: PermissionType.TASK_READ_ACCESS
    })
    name: PermissionType;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}