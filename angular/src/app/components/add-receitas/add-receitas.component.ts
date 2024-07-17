import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Recipe } from '../../models/app.model';

@Component({
  selector: 'app-add-receitas',
  templateUrl: './add-receitas.component.html',
  styleUrls: ['./add-receitas.component.scss']
})
export class AddReceitasComponent {
  recipe: Recipe = {
    id: 0,
    title: '',
    item: '', // Inicialize o item como uma string vazia
    description: '',
    published: false,
    ingredients: []
  };
  ingredientName: string = '';
  submitted = false;
  items: string[] = []; // Array para armazenar os itens adicionados

  constructor(private appService: AppService) { }

  saveRecipe(): void {
    this.appService.createRecipe(this.recipe)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }
      );
  }

  addItem(): void {
    if (this.ingredientName.trim()) {
      this.items.push(this.ingredientName);
      if (this.recipe.item) {
        // Verifica se já existe algum item na lista
        const items = JSON.parse(this.recipe.item);
        items.push(this.ingredientName);
        this.recipe.item = JSON.stringify(items);
      } else {
        // Se não existir, cria uma nova lista com o item
        this.recipe.item = JSON.stringify([this.ingredientName]);
      }
      this.ingredientName = ''; // Limpa o campo de entrada
    }
  }

  newRecipe(): void {
    this.recipe = {
      id: 0,
      title: '',
      item: '', // Reinicializa o item como uma string vazia
      description: '',
      ingredients: [],
      published: false
    };
    this.ingredientName = '';
    this.submitted = false;
  }
}
