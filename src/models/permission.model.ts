import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database.config";

export default class Permission extends Model{}
Permission.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    action: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    resource: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{sequelize, modelName:'permission'});