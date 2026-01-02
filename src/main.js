// include bootstrap function
import express from "express";
import { database_connection } from "./DB/connection.js";
import authController from "./Modules/Auth/auth.controller.js";
import userController from "./Modules/user/user.controller.js";
import { config } from "dotenv";
config();


export const bootstrap = () => {
  const app = express();
  app.use(express.json());










  database_connection();
  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
  });
};
