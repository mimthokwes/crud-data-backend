import {Sequelize} from "sequelize";

const db = new Sequelize('dealy-routine_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;