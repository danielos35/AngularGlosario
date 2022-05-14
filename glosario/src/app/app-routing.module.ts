import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosReactivosComponent } from './formularios/formularios-reactivos/formularios-reactivos.component';

const routes: Routes = [
  // Cargar rutas hijas, debe de importarce el module, no el app routing
  {
    path: 'rutas',
    loadChildren: () =>
      import('./rutas/rutas.module').then((modulo) => modulo.RutasModule),
  },
  { path: '    ', component: FormulariosReactivosComponent },

  // Rutas por defecto
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
