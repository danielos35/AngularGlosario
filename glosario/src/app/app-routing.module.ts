import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormulariosReactivosComponent } from './formularios/formularios-reactivos/formularios-reactivos.component';
import { MaterialModule } from './material/material.module';

const routes: Routes = [
  // Cargar rutas hijas, debe de importarce el module, no el app routing
  {
    path: 'rutas',
    loadChildren: () =>
      import('./rutas/rutas.module').then((modulo) => modulo.RutasModule),
  },
  { path: 'reactivos', component: FormulariosReactivosComponent },

  // Guardas
  {
    path: 'guardianes',
    loadChildren: () =>
      import('./guards/guards.module').then((modulo) => modulo.GuardsModule),
  },

  {
    path: 'material',
    loadChildren: () =>
      import('./material/material.module').then(
        (modulo) => modulo.MaterialModule
      ),
  },

  // Rutas por defecto
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
