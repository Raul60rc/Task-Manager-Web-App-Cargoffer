const express = require("express");
const cors = require("cors");
const dotenv= require("dotenv").config();
const jwt = require("jsonwebtoken"); // not in use
const db = require("./src/utils/database/db");
const taskRoutes = require("./src/api/taskManager/tasks.routes");
const userRoutes = require("./src/api/users/users.routes");
const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL; // not in use

//Error: Cannot find module '.jwt' this is shown when trying to start server + JWT not showing up in package Json

const server = express();
db.connectDB();

server.use(cors({
  origin: '*',
  credentials: true
}))

server.use(express.json({ limit: "5mb" }));

server.use(express.urlencoded({ extended: false }));

server.use("/task", taskRoutes);
server.use("/users", userRoutes);

server.listen(PORT, () => {
  console.log("Server is Working in PORT 5001");
});