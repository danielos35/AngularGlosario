import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanactivateComponent } from './canactivate/canactivate.component';
import { VigilateGuard } from './vigilate.guard';

const routes: Routes = [
  {
    path: '',
    component: CanactivateComponent,

    // Utilizar can activate
    // ...Las condiciones del guard (vigilante), en este caso estarán definidas en vigilate.guard.ts
    canActivate: [VigilateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuardsRoutingModule {}
