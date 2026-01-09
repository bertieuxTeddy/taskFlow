import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database.config";
import User from "./user.model";
import TaskPermission from "./taskPermission.model";

export default class Task extends Model{}
Task.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    isAffected: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    status: {
        type: DataTypes.ENUM("todo", "in-progress", "done"),
        defaultValue: "todo"
    },
    deadline: { // the due date for doing the task
        type: DataTypes.DATE,
        allowNull: true
    }
}, {sequelize, modelName: "Task"});

Task.belongsTo(User);
Task.hasMany(TaskPermission, {foreignKey: "taskId"});