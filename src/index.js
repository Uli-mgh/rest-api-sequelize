import app from "./app.js";
import { sequelize } from "./db/db.js";
import "./models/Project.js";
import "./models/Task.js";

const listening = async () => {
  try {
    // await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log("everything is ok");

    app.listen(3001);
    console.log("App listening on port, 3001");
  } catch (error) {
    console.error("unable to connect to the database:", error);
  }
};
listening();
