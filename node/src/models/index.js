const dbConfig = require("../config/DbAcess");
const Sequelize = require("sequelize");

// configuracao da DB
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port: dbConfig.port,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
// ----
const db = {};
// ----

// buscar o Sequelize
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// ---
// definir os MODELS
// MODEL 
// INGREDIETE
// RECIPE E INGREDIENTE
db.Recipe = require("./model")(sequelize, Sequelize);
db.Ingredient = require("./ingrediente")(sequelize, Sequelize);
db.RecipeIngredient = require("./recipeIngredient.model")(sequelize, Sequelize);

// Recife pode estar associado a muitos modelos Ingredients atrave do modelo intermediario RecipeIngredient
//db.Recipe.belongsToMany(db.Ingredient, { through: db.RecipeIngredient });
// Ingredient pode estar associado a muitos modelos Ingredients atrave do modelo intermediario RecipeIngredient
//db.Ingredient.belongsToMany(db.Recipe, { through: db.RecipeIngredient });
db.Recipe.associate(db);
db.Ingredient.associate(db);
module.exports = db;
