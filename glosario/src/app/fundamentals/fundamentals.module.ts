import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { CiclovidaComponent } from './ciclovida/ciclovida.component';
import { FundamentalRoutingModule } from './fundamentals.routing';
import { FormsModule } from '@angular/forms';
import { OnchangesComponent } from './onchanges/onchanges.component';
import { OndestroyComponent } from './ondestroy/ondestroy.component';

@NgModule({
  declarations: [
    InterpolacionComponent,
    EventbindingComponent,
    CiclovidaComponent,
    OnchangesComponent,
    OndestroyComponent,
  ],
  imports: [FormsModule, CommonModule, FundamentalRoutingModule],
  exports: [InterpolacionComponent, EventbindingComponent, CiclovidaComponent],
})
export class FundamentalsModule {}
