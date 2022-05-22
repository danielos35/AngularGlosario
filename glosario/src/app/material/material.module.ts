import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MattableComponent } from './mattable/mattable.component';
import { MaterialRoutingModule } from './material-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [MattableComponent],
  imports: [CommonModule, MaterialRoutingModule, MatTableModule],
})
export class MaterialModule {}
