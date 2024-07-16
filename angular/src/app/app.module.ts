import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Certifique-se de importar FormsModule
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// ROTAS
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './app.component';
// ADD RECEITAS(ADD) & RECEITAS LIST(API)
import { AddReceitasComponent } from './components/add-receitas/add-receitas.component'; 
import { ReceitasListComponent } from './components/receitas-list/receitas-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddReceitasComponent,
    ReceitasListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
