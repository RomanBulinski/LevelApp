import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentLeftComponent} from './content-left/content-left.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLeftComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecondLeftRoutingModule { }
