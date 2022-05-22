import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MattableComponent } from './mattable/mattable.component';

const routes: Routes = [
  {
    path: 'table',
    component: MattableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaterialRoutingModule {}
