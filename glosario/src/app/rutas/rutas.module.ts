import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RutasRoutingModule } from './rutas-routing.module';
import { RutaunoComponent } from './rutauno/rutauno.component';
import { RutadosComponent } from './rutados/rutados.component';
import { RouterlinkComponent } from './routerlink/routerlink.component';


@NgModule({
  declarations: [
    RutaunoComponent,
    RutadosComponent,
    RouterlinkComponent
  ],
  imports: [
    CommonModule,
    RutasRoutingModule
  ]
})
export class RutasModule { }
