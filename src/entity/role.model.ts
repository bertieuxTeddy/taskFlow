import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Permission} from "./permission.model";

@Entity()
export class Role{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        type: 'varchar',
    })
    name: string;

    @ManyToMany(() => Permission)
    @JoinTable()
    permissions: Permission[];
}