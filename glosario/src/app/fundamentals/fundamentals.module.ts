import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';

@NgModule({
  declarations: [InterpolacionComponent, EventbindingComponent],
  imports: [CommonModule],
  exports: [InterpolacionComponent, EventbindingComponent],
})
export class FundamentalsModule {}
