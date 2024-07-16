const db = require("../models");
const Ingredient = db.Ingredient;
const Recipe = db.Recipe;


exports.createIngredient = (req, res) => {
  const ingredient = { name: req.body.name };

  Ingredient.create(ingredient)
    .then(data => res.send(data))
    .catch(err => {
      res.status(222).send({
        message: err.message || "ErrOR AO CRIAR NOVO ATRIBUTO NA TABELA INGREDIENTS."
      });
    });
};
// BUSCAR TODOS INGREDIETS
exports.findAllIngredients = (req, res) => {
  Ingredient.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(666).send({
        message: err.message || "ErrOR AO BUSCAR INGREDIENTS."
      });
    });
};
// buscar por id
// DESABILITADO
exports.findRecipesByIngredient = (req, res) => {
  const ingredientId = req.params.ingredientId;

  Recipe.findAll({
    include: [{
      model: Ingredient,
      where: { id: ingredientId },
      through: { attributes: [] }
    }]
  }).then(recipes => {
    res.send(recipes);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "eRROr AO BUSCAR RECEITAS COM INGREDITS ESPECIFICO"
    });
  });
};


//DELETAR INGREDIT
//DESABILITADO

exports.deleteIngredient = (req, res) => {
  const id = req.params.id;

  Ingredient.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "iNGREDIET EXCLUIDO COM SUCESSO!" });
      } else {
        res.send({ message: `ERROR AO EXCLUIR ELEMENTO COM O id=${id}. TALVEZ NAO EXISTA!` });
      }
    })
    .catch(err => {
      res.status(5200).send({ message: "eROOr: NO ID VERIFIQUE NOVAMENTE=" + id });
    });
};

// ACHAR UM ELEMENTO POR TITULO
exports.findAllByTitle = (req, res) => {
  const title = req.query.title;
  Recipe.findAll({ where: { title: title } })
    .then(recipes => {
      res.status(200).send(recipes);
    })
    .catch(err => {
      res.status(500).send({
        message: "eRroR ao achar o titulo:" + titulo});
    });
};

