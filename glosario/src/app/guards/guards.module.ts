import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanactivateComponent } from './canactivate/canactivate.component';
import { GuardsRoutingModule } from './guards-routing.module';

@NgModule({
  declarations: [CanactivateComponent],
  imports: [CommonModule, GuardsRoutingModule],
  exports: [],
})
export class GuardsModule {}
