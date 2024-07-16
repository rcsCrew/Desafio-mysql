module.exports = (sequelize, Sequelize) => {
  const Recipe = sequelize.define('Recipe', {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    }
  });

  Recipe.associate = (models) => {
  //  Recipe.belongsToMany(models.Ingredient, { through: 'RecipeIngredients' });
    Recipe.belongsToMany(models.Ingredient, { through: models.RecipeIngredient });
  };

  Recipe.addHook('beforeSave', async (recipe, options) => {
    if (recipe.ingredients && recipe.ingredients.length < 3) {
      throw new Error('A receita deve ter pelo menos 3 ingredientes');
    }
  });

  return Recipe;
};
