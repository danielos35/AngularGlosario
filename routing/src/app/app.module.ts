import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { HomeComponent } from './home/home.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';


// Importación de Routes
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Creación de rutas

const appRoutes:Routes =[

  {path:'', component:HomeComponent},
  
  // Preapara la URL para recibir parametros con /: y el nombre del dato a enviar
  {path:'pageOne/:dato', component:PageOneComponent},
  {path:'pageTwo', component:PageTwoComponent},
  {path:'pageThree', component:PageThreeComponent}, 

  // Pagina de error, este path siempre debe de estar en el ultimo lugar 
  {path:'**', component:PaginaErrorComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    HomeComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    // Importar RouterModule
    RouterModule.forRoot(appRoutes), 

    // Para baindig insertar FormsModule
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
