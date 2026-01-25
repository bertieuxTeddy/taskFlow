import {DataSource} from "typeorm";
import User from "./entity/user.model";
import {Role} from "./entity/role.model";
import {Task} from "./entity/task.model";
import {Permission} from "./entity/permission.model";


export const dataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "teddy",
    password: "ted06071999",
    database: "dev",
    entities: [User, Role, Task, Permission],
    synchronize: true
});