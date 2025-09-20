import express from "express";
import { protect, admin } from "../middlewares/authMiddlewares.js";
import { createOrder, getMyOrders, getOrderById, getOrders, updateOrderToDelivered, updateOrderToPaid } from "../controllers/orderController.js";

const orderRoute = express.Router();

orderRoute.route("/").post(protect, createOrder).get(protect, admin, getOrders);

orderRoute.route('/mine').get(protect,getMyOrders)

orderRoute.route('/:id').get(protect,getOrderById)

orderRoute.route('/:id/pay').put(protect,updateOrderToPaid)

orderRoute.route('/:id/deliver').put(protect,admin,updateOrderToDelivered)


export default orderRoute