import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Recipe } from '../../models/app.model';

@Component({
  selector: 'app-receitas-list',
  templateUrl: './receitas-list.component.html',
  styleUrls: ['./receitas-list.component.scss']
})
export class ReceitasListComponent implements OnInit {
  recipes: Recipe[] = [];
  currentIndex = -1;
  title = '';
  item = '';

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
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  setActiveRecipe(recipe: Recipe, index: number): void {
    this.currentIndex = index;
  }
// deletar desativado
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
// buscar por title
  searchTitle(): void {
    if (this.title.trim()) {
      this.appService.findByTitle(this.title)
        .subscribe(
          (data: Recipe[]) => {
            this.recipes = data;
          },
          (error: any) => {
            console.log(error);
          }
        );
    } else {
      this.retrieveRecipes();
    }
  }
// buscar item
  searchItem(): void {
    if (this.item.trim()) {
      this.appService.findByItem(this.item)
        .subscribe(
          (data: Recipe[]) => {
            this.recipes = data;
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
