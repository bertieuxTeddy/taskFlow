import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database.config";
import User from "./user.model";
import TaskPermission from "./taskPermission.model";

export default class Role extends Model{}
Role.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {sequelize, modelName: "role"});

Role.belongsToMany(User, {
    through: "UserRole",
    foreignKey: "RoleId",
});

Role.belongsToMany(TaskPermission, {
    through: "RolePermission",
    foreignKey: "roleId",
});