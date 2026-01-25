import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BeforeInsert,
    BeforeUpdate, ManyToMany, JoinTable
} from "typeorm";
import * as bcrypt from "bcryptjs";
import {Role} from "./role.model";

@Entity({
    name: 'users'
})
export default class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        type: "varchar",
        length: 80,
        unique: true
    })
    email: string;

    @Column({
        nullable: false,
        type: "varchar",
        select: false
    })
    password: string;

    @Column({
        nullable: false,
        length: 110,
        type: "varchar"
    })
    username: string;

    @Column({
        type: "boolean",
        default: false
    })
    isActive: boolean;
    emailVerified: boolean;

    @Column({
        type: "varchar",
        nullable: true
    })
    profilePicture: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @BeforeInsert()
    @BeforeUpdate()
    async hashPassword(){
        if(this.password){
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        }

    }

    @BeforeInsert()
    @BeforeUpdate()
    async emailToLowerCase(){
        if(this.email){
            this.email = this.email.toLowerCase();
        }
    }

    @BeforeInsert()
    @BeforeUpdate()
    async usernameToLowerCase(){
        if(this.username){
            this.username = this.username.toLowerCase();
        }
    }

    @ManyToMany(()=> Role)
    @JoinTable()
    role: Role[];
}
