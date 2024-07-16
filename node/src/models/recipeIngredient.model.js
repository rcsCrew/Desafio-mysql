module.exports = (sequelize, Sequelize) => {
  // recipeId e ingredientId: Estes campos armazenam as chaves estrangeiras que referenciam os modelos Recipe e Ingredient, respectivamente.
  const RecipeIngredient = sequelize.define('RecipeIngredient', {
    recipeId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Recipes',
        key: 'id'
      }
    },
    ingredientId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'Ingredients',
        key: 'id'
      }
    }
  });

  return RecipeIngredient;
};
