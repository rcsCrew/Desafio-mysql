import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Recipe, Ingredient } from '../../models/app.model';

@Component({
  selector: 'app-receitas-list',
  templateUrl: './receitas-list.component.html',
  styleUrls: ['./receitas-list.component.scss']
})
export class ReceitasListComponent implements OnInit {
  recipes: Recipe[] = [];
  id: number = 0; // Campo para armazenar o ID do ingrediente (CASO QUEIRA ADICIONAR BUSCAR POR ID POREM NAO ESTA SENDO USADO)
  currentIndex = -1;
  title = '';

  constructor(private appService: AppService) {}

  // 19:21
  // 12/07
  // AO SER INICIADO ELE BUSCA TODOS OS ITEM NO DB
  ngOnInit(): void {
    this.retrieveRecipes();
  }


  retrieveRecipes(): void {
    this.appService.getAllRecipes()
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  // VERIFICA QUAL INDICE ATUAL
  setActiveRecipe(recipe: Recipe, index: number): void {
    this.currentIndex = index;
  }

  // DELETAR RECIPE
  // NAO ADICIONADO AO APP SERVICE
  deleteAllRecipes(): void {
    this.appService.deleteAllRecipes()
      .subscribe(
        (response: any) => {
          console.log(response);
          this.retrieveRecipes();
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  // BUSCAR TITLE POR TITULO
  searchTitle(): void {
    if (this.title.trim()) {
      this.appService.findByTitle(this.title)
        .subscribe(
          (data: Recipe[]) => {
            this.recipes = data;
            console.log(data);
          },
          (error: any) => {
            console.log(error);
          }
        );
    } else {
      this.retrieveRecipes();
    }
  }

  
}
