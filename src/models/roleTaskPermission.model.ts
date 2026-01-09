import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database.config";

export default class RoleTaskPermission extends Model{};
RoleTaskPermission.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    }
}, {sequelize, modelName: "RolePermission"});
