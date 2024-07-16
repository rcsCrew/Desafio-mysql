const express = require("express");
const router = express.Router();
const ingredientController = require("../controllers/controllers");
const recipeController = require("../controllers/recipe.controller");

router.get('/recipes/search', ingredientController.findAllByTitle);

// Rotas para ingredientes
router.post("/ingredients", ingredientController.createIngredient);
router.get("/ingredients", ingredientController.findAllIngredients);
router.delete("/ingredients", ingredientController.deleteIngredient);
// buscar por id e filtrar ingrendiente 
// desabilitado
router.get("/recipes/by-ingredient/:ingredientId", ingredientController.findRecipesByIngredient);

// Rotas para receitas
router.post("/recipes", recipeController.createRecipe);
router.get("/recipes", recipeController.findAllRecipes);
router.delete("/recipes/:id", recipeController.deleteRecipe);

module.exports = router;

