import "reflect-metadata"
import {dataSource} from "./data-source";
import User from "./entity/user.model";
import {DataSource} from "typeorm";
import {Permission, PermissionType} from "./entity/permission.model";


dataSource.initialize().then((value: DataSource)=>{
    console.log("connected to database");
    const user = new User();
    user.email = "admin@gmail.com";
    user.password = "admin";
    user.username = "Admin";

    value.manager.save(user).then((value: User)=>{
        console.log(value)
    }).catch((err)=>{
        console.log(err);
    })

    const readPerm = new Permission();
    readPerm.name = PermissionType.TASK_READ_ACCESS;

    const deletePerm = new Permission();
    deletePerm.name = PermissionType.TASK_DELETE_ACCESS;

    const updatePerm = new Permission();
    updatePerm.name = PermissionType.TASK_UPDATE_ACCESS;

    const createPerm = new Permission();
    createPerm.name = PermissionType.TASK_CREATE_ACCESS;

    value.manager.save(readPerm).then((perm: Permission)=>{
        console.log("TASK_READ_ACCESS created");
        value.manager.save(deletePerm).then((perm: Permission)=>{
            console.log("TASK_DELETE_ACCESS created");
            value.manager.save(updatePerm).then((perm: Permission)=>{
                console.log("TASK_UPDATE_ACCESS created");
                value.manager.save(createPerm).then((perm: Permission)=>{
                    console.log("TASK_CREATE_ACCESS created");
                })
            })
        })
    }).catch((err)=>{
        console.log(err);
    })


}).catch(err=>{
    console.error(err.message);
})