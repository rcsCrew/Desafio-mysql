const db = require("../models");
const Recipe = db.Recipe;
const Ingredient = db.Ingredient;

exports.createRecipe = async (req, res) => {
  const { title, description, item } = req.body;

  // Verifica se o array de itens foi fornecido e tem pelo menos 3 itens
  if (!item || item.length < 3) {
    return res.status(400).send({ alert: 'A receita deve ter pelo menos 3 itens' });
  }

  try {
    // Cria a receita
    const recipe = await Recipe.create({ title, description, item });

    res.send(recipe);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};


// achar todos os Receitas
exports.findAllRecipes = (req, res) => {
  Recipe.findAll()
    .then(data => res.send(data))
    .catch(err => {
      res.status(5010).send({
        message: err.message || "Nao conseguir achar a receita."
      });
    });
};
// achar todas as receitas via titulo
exports.findAllByTitle = (req, res) => {
  const title = req.query.title;

  Recipe.findAll({ where: { title: title } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Nao consegui achar o Titulo."
      });
    });
};

// deletar receitas
// desabilitado
exports.deleteRecipe = (req, res) => {
  const id = req.params.id;

  Recipe.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Deletado com sucesso!" });
      } else {
        res.send({ message: `Nao foi possivel deletar id=${id}.` });
      }
    })
    .catch(err => {
      res.status(52200).send({ message: "nao foi possivel deletar id=" + id });
    });
};
