import { Component } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Recipe, Ingredient } from '../../models/app.model';

@Component({
  selector: 'app-add-receitas',
  templateUrl: './add-receitas.component.html',
  styleUrls: ['./add-receitas.component.scss']
})
export class AddReceitasComponent {
  recipe: Recipe = {
    id: 0,
    title: '',
    description: '',
    published: false,
    ingredients: []
  };
  ingredientName: string = '';
  submitted = false;

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

  addIngredient(): void {
    if (this.ingredientName.trim()) {
      const newIngredient: Ingredient = { id: 0, name: this.ingredientName };
      this.recipe.ingredients.push(newIngredient);
      this.ingredientName = ''; // Limpa o campo de entrada
    }
  }

  newRecipe(): void {
    this.recipe = {
      id: 0,
      title: '',
      description: '',
      published: false,
      ingredients: []
    };
    this.ingredientName = '';
    this.submitted = false;
  }
}
