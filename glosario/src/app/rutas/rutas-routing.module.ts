import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutaunoComponent } from './rutauno/rutauno.component';
import { RutadosComponent } from './rutados/rutados.component';
import { RouterlinkComponent } from './routerlink/routerlink.component';

const routes: Routes = [
  { path: '', component: RutaunoComponent },
  { path: 'uno', component: RutaunoComponent },
  { path: 'dos', component: RutadosComponent },
  { path: 'router', component: RouterlinkComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutasRoutingModule {}

// ....VER ROUTER MODULE PRINCIPAL PARA CONOCER EL IMPORTE
