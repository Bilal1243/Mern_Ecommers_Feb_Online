import express from "express";

const productRoute = express.Router();

import { admin, protect } from "../middlewares/authMiddlewares.js";
import {
  createProduct,
  deleteProduct,
  updateProduct,
  getProducts,
  getProductById,
  getAllProducts,
  createProductReview,
} from "../controllers/productController.js";
import { productParser } from "../config/uploads.js";

productRoute
  .route("/")
  .get(getProducts)
  .post(protect, admin, productParser.single("image"), createProduct);


productRoute.route('/getAllProducts').get(protect , admin ,getAllProducts)

productRoute
  .route("/:id")
  .get(getProductById)
  .put(protect, admin, productParser.single("image"), updateProduct)
  .delete(protect, admin, deleteProduct);

productRoute.route('/:id/review').post(protect,createProductReview)

export default productRoute;
