import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database.config"

export default class UserRole extends Model{}
UserRole.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    }
}, {sequelize, modelName: "user_role"})