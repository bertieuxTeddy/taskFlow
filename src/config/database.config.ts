import {Sequelize} from "sequelize";

const sequelize = new Sequelize("taskflow", "usop", "1piece&eastblue", {
    host: "localhost",
    port: 3306,
    dialect: "mariadb"
});

export default sequelize;