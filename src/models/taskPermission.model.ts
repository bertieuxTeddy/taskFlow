import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database.config";
import Role from "./role.model";
import Task from "./task.model";

export default class TaskPermission extends Model{}
TaskPermission.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{sequelize, modelName:'permission'});

TaskPermission.belongsToMany(Role, {
    through: "RolePermission",
    foreignKey: "taskPermissionId",
})

TaskPermission.belongsTo(Task, {foreignKey: "taskId"});