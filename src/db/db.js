import Sequelize from "sequelize";

export const sequelize = new Sequelize("projectsdb", "postgres", "29031977", {
  host: "localhost",
  dialect: "postgres",
});
