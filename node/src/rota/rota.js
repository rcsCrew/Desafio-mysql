const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/controllers");
const recipeController = require("../controllers/recipe.controller");

// Rotas para ingredientes
router.post("/ingredients", ingredientController.createIngredient);
router.get("/ingredients", ingredientController.findAllIngredients);
router.delete("/ingredients/:id", ingredientController.deleteIngredient);

// Rotas para receitas
router.post("/recipes", recipeController.createRecipe);
router.get("/recipes", recipeController.findAllRecipes);
router.get("/recipes/search", recipeController.findAllByItem); // Rota para buscar por item
router.get("/recipes/search", recipeController.findAllByTitle);
router.delete("/recipes/:id", recipeController.deleteRecipe);

module.exports = router;
