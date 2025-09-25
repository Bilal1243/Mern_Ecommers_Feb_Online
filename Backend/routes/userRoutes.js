import express from "express";
import {
  deleteUser,
  getUserById,
  getUsers,
  loginUser,
  logoutUser,
  registerUser,
  updateUser,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect, admin } from "../middlewares/authMiddlewares.js";

const userRoute = express.Router();

userRoute.route("/").post(registerUser).get(protect, admin, getUsers);

userRoute.route("/auth").post(loginUser);

userRoute.route("/profile").put(protect, updateUserProfile);

userRoute.route("/logout").get(logoutUser);

userRoute
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default userRoute;
