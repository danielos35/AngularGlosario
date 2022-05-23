import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiclovidaComponent } from './ciclovida/ciclovida.component';
import { OndestroyComponent } from './ondestroy/ondestroy.component';

const routes: Routes = [
  {
    path: 'ciclo-vida',
    component: CiclovidaComponent,
  },

  {
    path: 'ondestroy',
    component: OndestroyComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundamentalRoutingModule {}
