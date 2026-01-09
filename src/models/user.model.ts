import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database.config"
import Role from "./role.model";
import Task from "./task.model";


export default class User extends Model{}
User.init({
   id:{
     type: DataTypes.UUID,
     defaultValue: DataTypes.UUIDV4,
     primaryKey: true
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
   },
   username: {
       type: DataTypes.STRING,
       allowNull: false,
   },
   isActive: {
       type: DataTypes.BOOLEAN,
       defaultValue: true,
   },
   emailVerified: {
     type: DataTypes.BOOLEAN,
     defaultValue: false,
   },
   profilePicture: {    // path toward profile Photo
       type: DataTypes.STRING,
       allowNull: true,
   }

}, {sequelize, modelName: "user"});

// add N:N relation between User and Role
User.belongsToMany(Role, {
    through: "UserRole",
    foreignKey: "userId",
})
User.hasMany(Task);