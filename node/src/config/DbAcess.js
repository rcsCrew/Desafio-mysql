module.exports = {
//  HOST: "mysql-1ee6756b-ramonsenger282-67c2.h.aivencloud.com",
//  USER: "avnadmin",
//  PASSWORD: "AVNS_mHGa0fY32bajCHfg-JK",
//  DB: "defaultdb",
//  dialect: "mysql",
//  port: "17273",
    HOST: "localhost",
    USER: "root",
    PASSWORD: "1234",
    DB: "desafio",
    port: "3306",
    dialect: "mysql",

pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};