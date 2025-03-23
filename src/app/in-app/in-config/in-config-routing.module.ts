import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InConfigComponent } from './in-config.component';

const routes: Routes = [
  {
    path: '',
    component: InConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InConfigRoutingModule {}
