import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiclovidaComponent } from './ciclovida/ciclovida.component';

const routes: Routes = [
  {
    path: 'ciclo-vida',
    component: CiclovidaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundamentalRoutingModule {}
