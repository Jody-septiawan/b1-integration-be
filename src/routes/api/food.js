const express = require("express");
const {
  findFoods,
  createFood,
  getFoodById,
  deleteFood,
  editFood,
} = require("../../controllers/food");
const { dtoFoodValidation } = require("../../middlewares/foodMiddlewares");
const { tokenValidation } = require("../../middlewares/authMiddlewares");
const router = express.Router();

router.get("/", findFoods);
router.get("/:id", getFoodById);
router.post("/", tokenValidation, dtoFoodValidation, createFood);
router.delete("/:id", tokenValidation, deleteFood);
router.patch("/:id", tokenValidation, dtoFoodValidation, editFood);

module.exports = router;
