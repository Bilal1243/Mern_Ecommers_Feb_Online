import express from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddlewares.js";

const userRoute = express.Router();

userRoute.route("/").post(registerUser).get(protect, admin, getUsers);

userRoute.route("/auth").post(loginUser);

userRoute
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

userRoute.route("/logout").get(logoutUser);

export default userRoute;
