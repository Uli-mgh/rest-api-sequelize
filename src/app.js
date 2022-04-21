import express from "express";
import routerProjects from "./routes/projects.js";
import routerTask from "./routes/task.js";

const app = express();

app.use(express.json());

app.use(routerProjects);
app.use(routerTask);

export default app;
