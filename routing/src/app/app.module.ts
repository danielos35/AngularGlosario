import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { HomeComponent } from './home/home.component';

// Importación de Routes
import { RouterModule, Routes } from '@angular/router';

// Creación de rutas

const appRoutes:Routes =[

  {path:'', component:HomeComponent}, 
  {path:'pageOne', component:PageOneComponent},
  {path:'pageTwo', component:PageTwoComponent},
  {path:'pageThree', component:PageThreeComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    // Importar RouterModule
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
