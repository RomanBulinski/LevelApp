import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentRightComponent} from './content-right/content-right.component';

const routes: Routes = [
  {
    path: '',
    component: ContentRightComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondRightRoutingModule { }
