module.exports = (sequelize, Sequelize) => {
  const Ingredient = sequelize.define("Ingredient", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    }
  });

  Ingredient.associate = (models) => {
    Ingredient.belongsToMany(models.Recipe, { through: 'RecipeIngredients' });
  };

  return Ingredient;
};
