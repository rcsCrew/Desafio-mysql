import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasListComponent } from './components/receitas-list/receitas-list.component';
import { ReceitasDetailsComponent } from './components/receitas-details/receitas-details.component';
import { AddReceitasComponent } from './components/add-receitas/add-receitas.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', component: ReceitasListComponent },
  { path: 'app/:id', component: ReceitasDetailsComponent },
  { path: 'add', component: AddReceitasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
